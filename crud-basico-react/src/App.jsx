import { useState,useEffect} from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import Tabla from './components/Tabla'
function App() {
  const [personas,setPersonas]=useState(JSON.parse(localStorage.getItem('personas')) ?? [])
  const [persona,setPersona]=useState({});
  const eliminarPersonsa=(id)=>{
    console.log("eliminando"+id)
    const eliminandoPersona=personas.filter((personaState)=>personaState.id!=id);
    setPersonas(eliminandoPersona);
  } 
  useEffect(()=>{
    localStorage.setItem('personas',JSON.stringify(personas));
  },[personas])
  return (
    <>
      <Header
      ></Header>
      <div className=' m-20 mobile flex'>
        <Formulario
        persona={persona}
        setPersonas={setPersonas}
        personas={personas}
        setPersona={setPersona}></Formulario>
        <Tabla
        personas={personas}
        persona={persona}
        setPersona={setPersona}
        eliminarPersonsa={eliminarPersonsa}></Tabla>
      </div>
    </>
  )
}

export default App
