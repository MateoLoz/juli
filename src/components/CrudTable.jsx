import React from "react";
import CrudRow from "./CrudRow";
import CrudFilter from "./CrudFilter";
import CrudData from "./CrudData";
import { useState,useEffect } from "react";
import ExportExcel from "./ExportExcel";



const CrudTable = ({data,handleurl,handlefiltercontrol,handleserchcontrol,handleserchurl,createData,updateData,deleteData,setDataToEdit,dataToEdit}) =>{
   
  const [edimodal,seteditmodal] = useState(false);

  const [modal,setmodal]= useState(false);








  

  const  send=(obj)=>{
    console.log(obj);
  }

  const sendji = (valor) =>{
    setmodal(valor);
  }
  


  

    return<>
      <div className=" mt-4 w-full h-10 flex text-center justify-center items-center mb-4 ">


      <h1 className='text-start text-2xl mr-10 ml-10'>Panel General</h1>

      </div>
     <div className='crud w-full justify-center flex-col gap-3 items-center flex'>
       <div className="w-full justify-center flex flex-row items-center gap-52 ">

       <CrudFilter  handlefiltercontrol={handlefiltercontrol} handleserchurl={handleserchurl} handleurl={handleurl} handleserchcontrol={handleserchcontrol}/>
       <CrudData modal={modal}  setmodal={setmodal}    createData={createData} updateData={updateData} setDataToEdit={setDataToEdit} dataToEdit={dataToEdit} />
       </div>
     
     <table className=' tabla w-auto  flex flex-col gap-4 justify-center items-center '>

      <thead className='w-full border-b-2 border-gray-600'>
         <tr className="flex flex-row gap-16">
        <th className='w-7  font-semibold text-lg text-gray-500 text-center'>ID</th>
        <th className='w-24 font-semibold text-lg text-gray-500 text-center'>Nombre</th>
        <th className='w-24 font-semibold text-lg text-gray-500 text-center'>Apellido</th>
        <th className='w-28 font-semibold text-lg text-gray-500 text-center'>Membresia</th>
        <th className='w-24 font-semibold text-lg text-gray-500 text-center'>vencimiento</th>
        <th className='w-16 font-semibold text-lg text-gray-500 text-center'>Status</th>
        <th className='w-7 font-semibold text-lg text-gray-500 text-center'>Rest</th>
        <th className='w-36 font-semibold text-lg text-gray-500 text-center'>Acciones</th>
        </tr>
      </thead>

      <tbody className=' w-full max-h-80  overflow-y-auto s scroll-red-500 flex flex-col gap-6 '>
        
      {data.length > 0 ?  data.map( el => <CrudRow  sendji={sendji} send={send} setDataToEdit={setDataToEdit}   deleteData={deleteData} updateData={updateData}  key={el.id} el={el}/>) :
        <tr className="text-center "><td className="text-2xl font-semibold" colSpan="7">Tabla sin datos!</td></tr>}
      </tbody>
      
     </table>

     <div className="  w-9/12 h-12 flex justify-end items-center  ">
      
      <ExportExcel data={data}/>
      
     </div>

     </div>

    </>
}

export default CrudTable