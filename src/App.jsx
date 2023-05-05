import Header from './assets/components/Header'
import {useEffect, useState} from 'react'
import {generarID} from './helpers'
import iconoAgregar from './img/add.svg'
import Modal from './assets/components/Modal';
import ListadoGastos from './assets/components/ListadoGastos';

function App() {
  const [presupuesto,setPresupuesto] = useState('');
  const [presupuestoValido, setPresupuestoValido] = useState(false); //Dejar en False

  /*Hooks para activar Ventana del nuevo formulario para agregar gasto al dar clic en el "+"*/
  const [modal,setModal] = useState(false)
  const[animarModal, setAnimarModal] = useState(false)

  //Hook para Almecenar todos los gastos
  const [almacenarGastos, setalmacenarGastos] = useState([]);

  //Hook para ditar los gastos
  const [editarGasto, setEditarGasto] = useState({});

  //Hook que escucha cambo en Hook "editarGasto" para arrojar formulario
  useEffect(()=>{
    if(Object.keys(editarGasto).length > 0){
      setModal(true);
      setTimeout(() => {
        setAnimarModal(true)
      }, 500);
    }
  },[editarGasto])
 
  //Función cunado se oprime el "+" para crear un gasto
  const handleAgregarGasto = () => {
    setModal(true)
    setEditarGasto({})
    setTimeout(() => {
      setAnimarModal(true)      
    }, 500);
  }

  const almacenarGasto = (nuevoGasto) => {

    if (nuevoGasto.id) {
      //Para Editar o actualizar el gasto
      const gastoEditado = almacenarGastos.map(gastoAEditar => (gastoAEditar.id === nuevoGasto.id) ? nuevoGasto : gastoAEditar)
      //console.table(nuevoGasto)
      setalmacenarGastos(gastoEditado);
    } else
    {
      //Para Agregar un gasto nuevo
      nuevoGasto.id = generarID();
      nuevoGasto.fecha = Date.now();
      setalmacenarGastos([...almacenarGastos,nuevoGasto]);
    }

    setAnimarModal(false)
    setTimeout(() => {
      setModal(false);
    }, 500);
  }

  //Función para eliminar el gasto (Lo enviamos como PROP)
  const eliminarGasto = (id) => {
    const eliminarGasto = almacenarGastos.filter(gasto => gasto.id !== id); 
    setalmacenarGastos(eliminarGasto);
  }

   
  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        almacenarGastos = {almacenarGastos}
        presupuesto = {presupuesto}
        setPresupuesto = {setPresupuesto}
        presupuestoValido = {presupuestoValido}
        setPresupuestoValido = {setPresupuestoValido}
      />

      {presupuestoValido && (
        <> 
          <main>
            <ListadoGastos
              almacenarGastos={almacenarGastos}
              setEditarGasto={setEditarGasto}
              eliminarGasto={eliminarGasto}
            />
          </main>

          <div className="nuevo__gasto">
            <img
              src={iconoAgregar}
              alt="Nuevo Gasto"
              onClick={handleAgregarGasto}
            />
          </div>
        </>
      )}

      {modal &&
      <Modal
        setModal={setModal}
        animarModal={animarModal}
        setAnimarModal={setAnimarModal}
        almacenarGasto={almacenarGasto} //Función para editar gasto con un parametro de entrada de 
        editarGasto = {editarGasto}
        setEditarGasto = {setEditarGasto}
      />}  
      
    </div>
  )  
}

export default App
