import Header from './assets/components/Header'
import {useState} from 'react'

function App() {
  const [presupuesto,setPresupuesto] = useState('');
  
  return (
    <Header
      presupuesto = {presupuesto}
      setPresupuesto = {setPresupuesto}
    />
  )
}

export default App
