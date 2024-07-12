import React from "react";
import { useState,useEffect } from "react";
import { HelperHttp } from "../helpers/HelperHttp";
import CrudTable from "./CrudTable";


const CrudApp = () =>{

    const [db,setDb] = useState([]);
    const [dataToEdit, setDataToEdit] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [filter,setfilter] = useState(false);
    const [serch,setserch] = useState(false);
    const [urlfilter,seturlfilter] = useState();
    const [urlserch,seturlserch] = useState();
    let api = HelperHttp();
    let url = 'http://localhost:3000/Users';
    

    const handlefiltercontrol = (param) =>{
      setfilter(param);
    }
    const handleserchcontrol = (param) =>{
        setserch(param)
    }

    const handleurl = (type,value) =>{
    seturlfilter(`${url}?${type}=${value}`);
    }

    const handleserchurl = (keyserch)  =>{
        seturlserch(`${url}?nombre=${keyserch}`);
    }

    useEffect(()=>{
        if(!filter && !serch){
     setLoading(true);
     api.get(url).then(res =>{
        if(!res.err){
            setDb(res);
            setError(null);
        }
        else{
            setDb([]);
            setError(err);
            console.log(err);
        }
     })
        }
        if(filter){
        setLoading(true);
     api.get(urlfilter).then(res =>{
        if(!res.err){
            setDb(res);
            setError(null);
        }
        else{
            setDb([]);
            setError(err);
            console.log(err);
        }
     })
        }
        if(serch){
            setLoading(true);
     api.get(urlserch).then(res =>{
        if(!res.err){
            setDb(res);
            setError(null);
        }
        else{
            setDb([]);
            setError(err);
            console.log(err);
        }
     })
        }
    },[filter,serch])

    

    const createData = (data) => {
        delete data.id
        let options = {body:data, headers:{"content-type":"application/json"}}
        api.post(url, options).then((res)=>{
          if(!res.err){
              setDb([...db, res])
          }else{
              setError(res);
          }
        })
        
      }
      const updateData = (data) => {
        let endpoint = `${url}/${data.id}`;
        console.log(endpoint);
        let options = {body:data, headers:{"content-type":"application/json"}}
        api.put(endpoint, options).then((res)=>{
          console.log(res);
          if(!res.err){
              let newData = db.map((el)=> el.id === data.id ? data : el)
              setDb(newData)
          }else{
              setError(res);
          }
        })
      }

      const deleteData = (id) => {
          let isDelete = window.confirm(`Estas seguro de eliminar '${id}'?`)
          if(isDelete){      
            let endpoint = `${url}/${id}`;
            let options = {headers:{"content-type":"application/json"}}
            api.del(endpoint, options).then((res)=>{
                if(!res.err){
                    let newData = db.filter(el => el.id !== id)  
                    setDb(newData)
                }else{
                    setError(res);
                }
            })  
          }
        }





    return<>
    {db && <CrudTable  handleurl={handleurl} handleserchurl={handleserchurl} handleserchcontrol={handleserchcontrol} handlefiltercontrol={handlefiltercontrol} data={db} createData={createData} updateData={updateData} deleteData={deleteData} setDataToEdit={setDataToEdit} dataToEdit={dataToEdit}/>}
    </>
}

export default CrudApp;