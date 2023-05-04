import ControlPresupuesto from "./ControlPresupuesto"
import NuevoPresupuesto from "./NuevoPresupuesto"

const Header = ({presupuesto,setPresupuesto,presupuestoValido,setPresupuestoValido,almacenarGastos}) => {
  return (
    <header className="" >
      {presupuestoValido ? (
        <ControlPresupuesto
          presupuesto = {presupuesto}
          almacenarGastos = {almacenarGastos}
        />        
      ) :(
        <NuevoPresupuesto
          presupuesto = {presupuesto}
          setPresupuesto = {setPresupuesto}
          setPresupuestoValido = {setPresupuestoValido}
        />

      )}    
      
    </header>
  )
}

export default Header
