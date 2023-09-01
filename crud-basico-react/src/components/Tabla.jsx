import React from 'react'
import Cuerpo from './Cuerpo'
const Tabla = ({persona,personas,setPersona,eliminarPersonsa}) => {
  return (
    <div className=' w-2/3 ml-10 overflow-y-scroll shadow-lg shadow-slate-950 rounded-lg tablita'>
      <table className='w-full rounded-md '>
        <thead className=' bg-white'>
            <tr><th>Nombre</th>
            <th>Apellidos</th>
            <th>Fecha de cumpleaños</th>
            <th>Determinacion</th></tr>
        </thead>
        <tbody>
            {personas.map((persona)=>
                <Cuerpo
                eliminarPersonsa={eliminarPersonsa}
                key={persona.id}
                persona={persona}
                setPersona={setPersona}></Cuerpo>
            )}
        </tbody>
      </table>
    </div>
  )
}

export default Tabla
