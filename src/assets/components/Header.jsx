import NuevoPresupuesto from "./NuevoPresupuesto"

const Header = ({presupuesto,setPresupuesto,presupuestoValido,setPresupuestoValido}) => {
  return (
    <header className="" >
      {presupuestoValido ? (
        <h1>Todo OK</h1>
        
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
