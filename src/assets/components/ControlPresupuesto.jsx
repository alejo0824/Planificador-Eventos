const ControlPresupuesto = ({presupuesto}) => {

    //Método para formatear el presupuesto a moneda
    const formatearCantidad = (cantidad) =>{
        
        return Number(cantidad).toLocaleString('en-US',{
            style:'currency',
            currency:'USD'
        })
    }

    return (
        <div className="fondo__controlPresupuesto">
            <div className="fondo_2">
                <div className="contenedor__controPresupuesto contenedor sombra">
                    <h2>Gastos de boda</h2>              

                    <div className="contenido__controlPresupuesto">
                        <div className="grafica__controlPresupuesto">
                            <p>grafica aquí</p>
                        </div>
                        <div className="info__controlPresupuesto">                   

                            <button type="button" className="boton__controlPresupuesto">Resetear APP</button>

                            <div className="items__controPresupuesto">
                                <p>
                                    <span>Presupuesto:</span> {formatearCantidad(presupuesto)}
                                </p>
                                <p>
                                    <span>Disponible:</span> {formatearCantidad(0)}
                                </p>
                                <p>
                                    <span>Gastado:</span> {formatearCantidad(0)}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default ControlPresupuesto
