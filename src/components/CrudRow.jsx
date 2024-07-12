import React from "react";
import { useState,useEffect } from "react";
import {saveelement} from './edit';

console.log(saveelement);

const form = {
  id: null,
    nombre: "",
    apellido: "",
    membresia: "",
    status: "",
    horas: "",
    vencimiento: ""
}


 const CrudRow = ({el,deleteData,setDataToEdit,sendji}) =>{

   let {id,nombre,apellido,membresia,status,horas,vencimiento} = el;
  const [jiji,setjiji] = useState(true);


  


  
   const setji = ()=>{
 
    enviar();   
   }
   const enviar = () =>{
   
    sendji(jiji);
   }


    return<>
   

       <tr className='w-full flex flex-row gap-16 mapped-user' key={id}>
       
        <td className='w-7 text-center text-md '>{id}</td>
        <td className='w-24 text-center text-md'>{nombre}</td>
        <td className='w-24 text-center text-md'>{apellido}</td>
        <td className='w-28 text-center text-md'>{membresia}</td>
        <td className='w-24 text-center text-md'>{vencimiento}</td>
        <td className='w-16 text-center text-md'>{status}</td>
       <td className='w-7 text-center text-md'>{horas}</td>
       <td className='flex mb-2 items-center justify-center'>
       <div className='ml-7 flex flex-row gap-3'>
       <button className='btn-accion-editar flex items-center justify-center'onClick={()=>{setDataToEdit(true); setji();saveelement(el)}}><img src="./src/img/editar.png" alt="" width={'14px'} /></button>
      <button className='btn-accion-eliminar flex items-center justify-center' onClick={()=>{deleteData(id)}}><img src="./src/img/x.png" alt="" width={'14px'} /></button>
        </div>
     </td>

  </tr>
    </>
}

export default CrudRow