import React from 'react'

const Cuerpo = ({persona,setPersona,eliminarPersonsa}) => {
    /* const [nombres,apellidos,cumple]=persona; */
    return (
    <>
    <div className='mt-4'></div>
            <tr className=''>
                <td className='text-center mb-3'>{persona.nombres}</td>
                <td className='text-center mb-3'>{persona.apellidos}</td>
                <td className='text-center'>{persona.cumple}</td>
                <td className=' flex place-content-center'>
                    <button className=' px-5 py-2 bg-indigo-500 rounded-lg mx-4 font-extrabold text-white' onClick={(e)=>setPersona(persona)}>Editar</button>
                    <button className=' px-5 py-2 bg-red-500 rounded-lg mx-4 font-extrabold text-white' onClick={(e)=>eliminarPersonsa(persona.id)}>Eliminar</button>
                </td>
            </tr>
    <div className='mb-4'></div>
    </>
  )
}

export default Cuerpo
