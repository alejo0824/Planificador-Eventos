import {useState,useEffect} from "react"
import { formatearCantidad } from "../../helpers"
import {buildStyles, CircularProgressbar} from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"

const ControlPresupuesto = ({presupuesto,almacenarGastos}) => {    

    const[porcentaje, setPorcentaje] = useState(0);
    const[disponible, setDisponible] = useState(0);
    const [gastado,setGastado] = useState(0);

    useEffect(() => {
        const totalGastado = almacenarGastos.reduce ((total,gasto) => 
            gasto.cantidad + total, 0
        )

        const totalDisponible = presupuesto - totalGastado

        //Calcular el porcentaje gastado
        const nuevoPorcentaje = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2);
        setPorcentaje(nuevoPorcentaje);

        setDisponible(totalDisponible);
        setTimeout(() => {            
            setGastado(totalGastado)  
        }, 1500);
      
    }, [almacenarGastos])
    

    return (
        <div className="fondo__controlPresupuesto">
            <div className="fondo_2">
                <div className="contenedor__controPresupuesto contenedor sombra">
                    <h2>Gastos de boda</h2>              

                    <div className="contenido__controlPresupuesto">
                        <div className="grafica__controlPresupuesto">
                            <div className="grafica">
                                <CircularProgressbar
                                    styles={buildStyles({
                                        pathColor: '#21b2a6',
                                        trailColor:'#C0ECE9',
                                        textColor: '#21b2a6'
                                    })}
                                    value={porcentaje}
                                    text={`${porcentaje}% Gastado`}
                                />
                            </div>
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
