import React, { useEffect, useState } from "react";

import axios from 'axios'
import {ExportToExcel} from './Export'

const ExportExcel = () =>{
   
    const [data,setdatos] = useState([]);
    const url = "http://localhost:3000/Users";
    const filename = "tabla de Usuarios"

    useEffect(()=>{


        const fetchdata = () =>{
            axios.get(url).then(r => setdatos(r.data));
        }
        fetchdata();
    },[])

   
    return<>
    <button className="bg-green-500 text-white p-1 rounded-md "><ExportToExcel apiData={data} fileName={filename}  >Exportar a Excel</ExportToExcel></button>
    


    </>
}

export default ExportExcel;