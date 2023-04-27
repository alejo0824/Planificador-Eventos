import React from 'react'
import Swal from 'sweetalert2';

const NuevoPresupuesto = ({presupuesto,setPresupuesto,setPresupuestoValido}) => {

    const alertaError = () => {      

        Swal.fire({
            icon: 'error',
            title: 'Algo salio mal ...',
            text: 'El presupuesto que has elegido no es válido, pon un número mayor que 0',
            timer: 2500           
        })
      } 

      const alertaCorrecto = () => {
        Swal.fire({
            icon: 'success',
            title: 'Presupuesto añadido correctamente',
            showConfirmButton:false,
            timer:1500
        })
      }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(Number(presupuesto) < 0 || !Number(presupuesto)){
            alertaError()
            return;
        }
        setPresupuestoValido(true);
        alertaCorrecto();
    }
    return (
        <div className="bg">    
            <div className="fondo centrar">
                <div className='contenedor__presupuesto sombra contenedor'>
                    <h1>Gastos de boda</h1>
                    <p>Añade un presupuesto para planificar tu boda,Podrás tener todos los gastos controlados. </p>
                    <form className='formulario' onSubmit={handleSubmit}>
                        <div className="campo">
                            <label className='nuevoPresupuesto' htmlFor="">Definir Presupuesto</label>
                            <input
                                className='nuevo-presupuesto sombra'
                                type="number"
                                placeholder='Añade tu presupuesto'
                                value={presupuesto}
                                onChange={(e) => setPresupuesto(e.target.value)}
                            />
                        </div>
                            <input type="submit" value="Añadir" />                
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NuevoPresupuesto
