import Header from './assets/components/Header'
import {useState} from 'react'

function App() {
  const [presupuesto,setPresupuesto] = useState('');
  const [presupuestoValido, setPresupuestoValido] = useState(false);
  return (
    <Header
      presupuesto = {presupuesto}
      setPresupuesto = {setPresupuesto}
      presupuestoValido = {presupuestoValido}
      setPresupuestoValido = {setPresupuestoValido}
    />
  )
}

export default App
