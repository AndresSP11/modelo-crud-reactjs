import React from 'react'
import { useState,useEffect } from 'react'
/* Recordar que dentro de los parentesis van los props definidos */
const Formulario = ({setPersonas,personas,persona,setPersona}) => {
    const [nombres,setNombres]=useState('');
    const [apellidos,setApellidos]=useState('');
    const [cumple,setCumple]=useState('');
    const [error,setError]=useState(false);
    const generarId=()=>{
        const random=Math.random().toString(36).substr(2);
        return random;
    }
    useEffect(()=>{ 
        if(Object.keys(persona).length>0){
            setNombres(persona.nombres);
            setApellidos(persona.apellidos);
            setCumple(persona.cumple);
        }
    },[persona])
    const handlesubmit= (e)=>{


        if([nombres,apellidos,cumple].includes('')){
            setError(true);
            
        }else{
            const objetoPersona={
                nombres,    
                apellidos,
                cumple  
            }
            if(persona.id){
                objetoPersona.id=persona.id
                const actualizarPersonas=personas.map((personaState)=>personaState.id===persona.id ? objetoPersona:personaState);
                setPersonas(actualizarPersonas);
                setPersona({});
            }else{
                objetoPersona.id=generarId();
                setPersonas([...personas,objetoPersona])
                
            }
            
            setApellidos('');
            setNombres('');
            setCumple('');
            
        }
        e.preventDefault(); 
    }
    return (
    <div className='w-1/3 bg-indigo-200 shadow-xl shadow-indigo-600 formulas'>
        
        <form action="" className='p-10' onSubmit={handlesubmit} >
        <h1 className='text-center text-black font-extrabold text-3xl'>Introduzca al Usuario correspondiente</h1>
        { error && <div className='w-full p-3 font-extrabold uppercase text-white bg-red-600 text-center rounded-md my-3' >Llena todo los valores</div>}
            <div className='mb-6'>
                <label htmlFor="nombre" className='block font-extrabold text-1xl'>Introduzca el Nombre:</label>
                <input type="text" className='w-full rounded-md p-2 border border-black'
                value={nombres}
                onChange={(e)=>setNombres(e.target.value)} />
            </div>
            <div className='mb-6'>
                <label htmlFor="apellidos" className='block font-extrabold text-1xl'>Introduzca los Apelllidos</label>
                <input type="text" className='w-full rounded-md p-2 border border-black' 
                value={apellidos}
                onChange={(e)=>setApellidos(e.target.value)}
                />
            </div>
            <div className='mb-6'>
                <label htmlFor="cumpleanos" className='block font-extrabold text-1xl'>Introduzca el cumpleaños</label>
                <input type="date" className='w-full rounded-md p-2 border border-black'
                value={cumple}
                onChange={(e)=>setCumple(e.target.value)}
                />
            </div>
            <input type="submit" className='text-center p-5 bg-indigo-500 w-full font-extrabold text-white mt-4 rounded-xl hover:cursor-pointer hover:bg-indigo-700 ' value={persona.id ? "Modificar Usuario":"Agregar Usuario"} />
        </form>
    </div>
  )
}

export default Formulario
