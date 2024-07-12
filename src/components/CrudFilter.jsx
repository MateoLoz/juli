import React from "react";
import { useState,useEffect } from "react";


const CrudFilter = ({handleurl,handlefiltercontrol,handleserchcontrol,handleserchurl}) =>{

const [filter,setfilter] = useState(false);
const [rotate,setrotate] = useState(false);
const [list,setlist] = useState(false);
const [option,setoption]= useState('');
const [condition,setcondition] = useState(false);
const [serch,setserch] = useState();
let identificador;

const rotar = () =>{

    if(!rotate){
        setrotate(true);
        setlist(true);
        let img = document.getElementById('img-arrow');
        img.className += "img-arrow";
        
    }
    if(rotate){

        setrotate(false);
        setlist(false);
        let img = document.getElementsByClassName('img-arrow');
        for(let i = 0; i< img.length; i++){
            img[i].classList.remove("img-arrow");
        }
       
    }
}



const evaluationFilter = (id,valor) =>{
    handleserchcontrol(false);
    let status = 'status';
    let membresia = 'membresia';

    if(!condition){
      
        identificador = document.getElementById(id);
 
        setoption(identificador.innerHTML);
      
        let btn = document.getElementById('btn-op');
        btn.style.opacity = 100;
        let img = document.getElementById('img-mark');
        img.style.opacity = 100;
        let aux = identificador.id;
        setrotate(true);
        setlist(true);
        rotar();
          
      
       if(valor == 1){
        handleurl(status,aux)
        handlefiltercontrol(true);
       }
       if(valor == 2){
        handleurl(membresia,aux)
        handlefiltercontrol(true);
       }
       if(valor == 3){
        handlefiltercontrol(false);
       }
       setcondition(true);

    }
    if(condition){
      setfilter(false);
      setoption('');
      setcondition(false);
      handlefiltercontrol(false);
      let btn = document.getElementById('btn-op');
      let img = document.getElementById('img-mark');
      img.style.opacity = 0;
      btn.style.opacity = 0;
      setTimeout(()=>{
        identificador = document.getElementById(id);
 
        setoption(identificador.innerHTML);
      
        let btn = document.getElementById('btn-op');
        btn.style.opacity = 100;
        let img = document.getElementById('img-mark');
        img.style.opacity = 100;
        let aux = identificador.id;
        setrotate(true);
        setlist(true);
        rotar();
          
      
       if(valor == 1){
        handleurl(status,aux)
        handlefiltercontrol(true);
       }
       if(valor == 2){
        handleurl(membresia,aux)
        handlefiltercontrol(true);
       }
       if(valor ==3 ){
        handlefiltercontrol(false);
        
       }

      },500)

      setcondition(true);
        
    }
         
}



const desfiltrar = () =>{
 setoption('');
 setcondition(false);
 let btn = document.getElementById('btn-op');
 btn.style.opacity = 0;
 let img = document.getElementById('img-mark');
 img.style.opacity = 0;
 handlefiltercontrol(false);
 setfilter(false);
}

const sendserch = () =>{

    handleserchcontrol(false)
    
     let serch = document.getElementById('input').value;
    setTimeout(() => {
        handleserchurl(serch);
        handleserchcontrol(true);
    }, 350);
   
     



     cleaninput();


}
const cleaninput = () =>{
    let input = document.getElementById('input');
    input.value = null;
    
}





    return<>
       <div className="w-3/5 flex flex-row gap-4 mb-4">
    <div  className="div flex flex-row items-center justify-center gap-4" >
    <input id="input" className="Serch" type="serch" placeholder="Buscar"  />
    <button className="btn-serch" onClick={sendserch}><img src="./src/img/lupa.png" alt="" className="serch"/></button>
    </div>
  
    <div className=" flex flex-row gap-5">

   <div className="filtro ">
   <li className="flex flex-row gap-2 w-full h-7 justify-center items-center" value="0" onClick={()=> rotar()}>Filtrar <img id="img-arrow" className="" src="./src/img/arrow1.png" alt="" width={'14px'} /></li>
       { list ? 
       <div className="w-full ">
        <li id="Pago" value={1} className="w-full li-item text-center" onClick={()=>evaluationFilter('Pago',1)}>Pago</li>
        <li id="Inpago" value={1}  className="w-full li-item text-center" onClick={()=>evaluationFilter('Inpago',1)}>Inpago</li>
        <li id="bono mensual medium" value={2}  className="w-full li-item text-center" onClick={()=>evaluationFilter('bono mensual medium',2)}>medium</li>
        <li id="bono mensual base" value={2} className="w-full li-item text-center" onClick={()=>evaluationFilter('bono mensual base',2)}>base</li>
        <li id="bono semanal" value={2} className="w-full li-item text-center" onClick={()=>evaluationFilter('bono semanal',2)}>Diario</li>
        <li id="bono diario" value={2} className="w-full li-item text-center" onClick={()=>evaluationFilter('bono diario',2)}>semanal</li>
        <li id="taller intensivo" value={2} className="w-full li-item text-center" onClick={()=>evaluationFilter('taller intensivo',2)}>Taller</li>
        <li id="bono bicho feo" value={2} className="w-full li-item text-center" onClick={()=>evaluationFilter('bono bicho feo',2)}>bicho</li>
        <li id="todo" value={3} className="w-full li-item text-center" onClick={()=>evaluationFilter('todo',3)}>Todo</li>
        </div> :
        null }
       
   </div>


     <button id="btn-op" className="option-selected" onClick={()=> desfiltrar()}> {option} <img id="img-mark" src="./src/img/mark.png" alt="" className="img-mark" /></button>
    </div>
     </div>
    </>
}

export default CrudFilter