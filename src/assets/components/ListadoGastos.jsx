import Gasto from "./Gasto"
import arrowLeft from "../../img/left-arrow.svg"
import arrowRigth from "../../img/right-arrow.svg"

const ListadoGastos = ({almacenarGastos}) => {
  return (
    <div className="listado-gastos contenedor">
        <h2>{almacenarGastos.length ? 'Gastos' : 'Todavía no hay gastos'}</h2>

        <div className={almacenarGastos.length ? 'informacion__movil' : 'ocultar' }>
             <img src={arrowRigth}alt="rigth-arrow" />
             <p> {''}Desliza para editar</p>
        </div>

        <div className={almacenarGastos.length ? 'informacion__movil' : 'ocultar' }>
            <p> Desliza para borrar{''} </p>
            <img src={arrowLeft}alt="left-arrow" />
        </div>
        {
            almacenarGastos.map( gasto => (
                <Gasto
                    key = {gasto.id}
                    gasto = {gasto}
                />
            ))
        }     
    </div>
  )
}

export default ListadoGastos
