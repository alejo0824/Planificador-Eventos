import {useState,useEffect} from "react"
import { formatearCantidad } from "../../helpers"

const ControlPresupuesto = ({presupuesto,almacenarGastos}) => {    

    const[disponible, setDisponible] = useState(0);
    const [gastado,setGastado] = useState(0);

    useEffect(() => {
        const totalGastado = almacenarGastos.reduce ((total,gasto) => 
            gasto.cantidad + total, 0
        )

        const totalDisponible = presupuesto - totalGastado

        setDisponible(totalDisponible);
        setGastado(totalGastado)  
      
    }, [almacenarGastos])
    

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
                                    <span>Disponible:</span> {formatearCantidad(disponible)}
                                </p>
                                <p>
                                    <span>Gastado:</span> {formatearCantidad(gastado)}
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
