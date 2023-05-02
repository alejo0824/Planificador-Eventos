import React from 'react'
import {alerta} from "../../helpers"

const NuevoPresupuesto = ({presupuesto,setPresupuesto,setPresupuestoValido}) => {

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(Number(presupuesto) < 0 || !Number(presupuesto)){
            alerta('error','Algo salio mal ...','El presupuesto que has elegido no es válido, pon un número mayor que 0')
            return;
        }
        setPresupuestoValido(true);
        alerta('success','Presupuesto añadido correctamente',null)
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
                            <input className='subir' type="submit" value="Añadir" />                
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NuevoPresupuesto
