import React, { useEffect, useState } from "react";
import CrudAdd from "./CrudAdd";



const CrudData = ({createData,updateData,setDataToEdit,dataToEdit,modal,setmodal}) =>{





  const handleerrormodal = () =>{
    setmodal(true);
  }








    
   









    return<>
    <div>
     <button className="btn-add" onClick={handleerrormodal}>Crear</button>
   <CrudAdd  modal={modal} setmodal={setmodal}    createData={createData} updateData={updateData} setDataToEdit={setDataToEdit} dataToEdit={dataToEdit}/>   
    </div>
   

    </>
}

export default CrudData;