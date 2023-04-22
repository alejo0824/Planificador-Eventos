import React from 'react'
import Swal from 'sweetalert2';

const NuevoPresupuesto = ({presupuesto,setPresupuesto}) => {

    const handleClick = () => {      
            Swal.fire({
                icon: 'error',
                title: 'Presupuesto Invalido',
                showConfirmButton:false,
                timer:1500
            })
      } 

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(Number(presupuesto) < 0 || !Number(presupuesto)){
            handleClick()
        }
        else {
            console.log("Es un numero");
        }
    }
    return (
        <div className="fondo centrar">    
            <div className='contenedor__presupuesto sombra'>
                <h1>Gastos de boda</h1>
                <p>Añade un presupuesto para planificar tu boda,Podrás tener todos los gastos controlados. </p>

                <form className='formulario' onSubmit={handleSubmit}>
                    <div className="campo">
                        <label htmlFor="">Definir Presupuesto</label>

                        <input
                            className='nuevo-presupuesto sombra'
                            type="text"
                            placeholder='Añade tu presupuesto'
                            value={presupuesto}
                            onChange={(e) => setPresupuesto(e.target.value)}
                        />
                    </div>

                        <input type="submit" value="Añadir" />

                
                </form>
            </div>
        </div>
    )
}

export default NuevoPresupuesto
