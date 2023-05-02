import Header from './assets/components/Header'
import {useState} from 'react'
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

  //Función cunado se oprime el "+" para crear un gasto
  const handleAgregarGasto = () => {
    setModal(true)
    setTimeout(() => {
      setAnimarModal(true)      
    }, 500);
  }

  const almacenarGasto = (nuevoGasto) => {
    nuevoGasto.id = generarID();
    nuevoGasto.fecha = Date.now();
    setalmacenarGastos([...almacenarGastos,nuevoGasto]);
    setAnimarModal(false)
    setTimeout(() => {
      setModal(false);
    }, 500);
  }
   
  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
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
        almacenarGasto={almacenarGasto}
      />}  
      
    </div>
  )  
}

export default App
