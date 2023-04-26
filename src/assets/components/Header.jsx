import ControlPresupuesto from "./ControlPresupuesto"
import NuevoPresupuesto from "./NuevoPresupuesto"

const Header = ({presupuesto,setPresupuesto,presupuestoValido,setPresupuestoValido}) => {
  return (
    <header className="" >
      {presupuestoValido ? (
        <ControlPresupuesto
          presupuesto = {presupuesto}
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
