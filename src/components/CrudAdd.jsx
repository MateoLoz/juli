import React from "react";
import { useState,useEffect } from "react";
import Select from 'react-select';
import {obj} from './edit';


const initialForm = {
    id: null,
    nombre: "",
    apellido: "",
    membresia: "",
    status: "",
    horas: "",
    vencimiento: ""
}




const membership = [
    
    {label: 'Mensual basico', value: 'bono mensual basico'},
    {label: 'Mensual Medium', value: 'bono mensual medium'},
    {label: 'Bicho Feo', value: 'bono bicho feo'},
    {label: 'Taller intensivo', value: 'taller intenviso'},
    {label: 'Bono semanal', value: 'bono semanal'},
    {label: 'Bono por dia', value: 'bono dia'},
]

const status = [
    {label: 'Pago', value: 'Pago'},
    {label: 'Inpago', value: 'Inpago'},
]


const CrudAdd = ({modal,createData,updateData,setDataToEdit,dataToEdit,setmodal}) =>{
    
    const [form, setForm] = useState(initialForm)
   const [ingreso,setingreso] = useState('Ingreso');   


   
    const closemodal = () =>{
        let modal = document.getElementById('modal');
        modal.style.opacity = 0;
        setTimeout(()=>{
            setmodal(false);
                },200)
        setForm(initialForm);
        setDataToEdit(null);
        setmodal(false);
        setingreso('Ingreso');
        
    }

  
    
useEffect(()=>{
    if(dataToEdit){
setForm(obj);
setingreso('Modificacion');
console.log(form);
} else {
setForm(initialForm);
}
},[dataToEdit])





useEffect(()=>{

    if(modal){
    setTimeout(() => {
    let modal = document.getElementById('modal');
    modal.style.opacity = 100;
    }, 450);
    }

},[modal])




const handleChange = (e) => {
    console.log(form)
    setForm({
        ...form,
        [e.target.name]: e.target.value,
    })
    
    
    
}
const handleSubmit = (e) => {
    e.preventDefault();
    if(!form.nombre || !form.apellido || !form.membresia || !form.horas || !form.status || !form.status){
        alert('Datos incompletos');
        return;
    }
    if(form.id === null){
        createData(form);
    } else {
    updateData(form);
}
handleReset(); 
}
const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(false);
    setmodal(false);
    setingreso('Ingreso');
    closemodal();
}


const handlemembership = (evento) =>{
    form.membresia = evento.value;
    console.log(form.membresia);
}

const handlestatus = (evento) =>{
    form.status = evento.value;
    console.log(form.status);
}






    return<>

    {modal ?  <div id="modal" className="modal" >
        <header className="mt-1 mb-3 w-full h-6 text-center items-center justify-center">
         <h2 className="text-xl font-medium"> {ingreso} de  datos </h2> 
        </header>
        <aside className="w-full h-3/4  flex  justify-center items-center">

        <form className="w-2/3 h-full flex flex-col gap-2 justify-center" onSubmit={handleSubmit} >

        <label className="label-text" htmlFor="nombre">
            Nombre
        </label>
        <input className="input-add" type="text" name="nombre" placeholder="Nombre" onChange={handleChange} value={form.nombre} />

        <label className="label-text" htmlFor="apellido">
            Apellido
        </label>
        <input className="input-add" type="text" name="apellido" placeholder="Apellido" onChange={handleChange} value={form.apellido} />

        <label className="label-text" htmlFor="membresia">
            Membresia
        </label>
        

      <Select className="select-box" name="membresia" id="membresia"
      options={membership}
      onChange={(e) => handlemembership(e)} />
        

        <label className="label-text" htmlFor="Status">
            Estado
        </label>
       <Select className="select-box" 
       options={status}
       onChange={(e)=> handlestatus(e)} />
        

        <label className="label-text" htmlFor="horas">
            Horas
        </label>
        <input className="input-add" type="text" name="horas" placeholder="Hora" onChange={handleChange} value={form.horas} />

        <label className="label-text" htmlFor="vencimiento">
            Vencimiento
        </label>
        <input className="input-add" type="text" name="vencimiento" placeholder="Vencimiento" onChange={handleChange} value={form.vencimiento} />


        <footer className="mt-2 w-full  h-12 rounded-2xl flex flex-row justify-around items-end ">
         <input className="btn-send-data" type="submit" value="Enviar"/>
         <button className="btn-close-modal" type="button" onClick={closemodal}>Cerrar</button>
        </footer>
        </form>
     
        </aside>

        
     </div> : null }

    
     
    </>

}

export default CrudAdd;