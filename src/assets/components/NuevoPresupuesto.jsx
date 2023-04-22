import React from 'react'

const NuevoPresupuesto = () => {
  return (
    <div className="fondo centrar">    
        <div className='contenedor__presupuesto sombra'>
            <h1>Gastos de boda</h1>
            <p>Añade un presupuesto para planificar tu boda,Podrás tener todos los gastos controlados. </p>

            <form className='formulario'>
                <div className="campo">
                    <label htmlFor="">Definir Presupuesto</label>

                    <input
                        className='nuevo-presupuesto sombra'
                        type="number"
                        placeholder='Añade tu presupuesto'
                        min={0}
                    />
                </div>
                
                    <input type="submit" value="Añadir" />

               
            </form>
        </div>
    </div>
  )
}

export default NuevoPresupuesto
