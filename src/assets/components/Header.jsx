import NuevoPresupuesto from "./NuevoPresupuesto"

const Header = ({presupuesto,setPresupuesto}) => {
  return (
    <div className="contenendor ">      
      <NuevoPresupuesto
        presupuesto = {presupuesto}
        setPresupuesto = {setPresupuesto}
      />
    </div>
  )
}

export default Header
