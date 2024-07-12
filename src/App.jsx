import { useEffect, useState } from 'react'
import './App.css'
import CrudApp from './components/CrudApp'
function App() {

const [admin,setadmin] = useState('AdminJuli');
const [passwrd,setpassword] = useState('JuliAdmin2024Col');
const [verpass,setverpass] = useState(true);


const verificar = () =>{


    let nombre = prompt('Ingrese el nombre:');
    let pass = prompt('Ingrese la contraseña');
  
    if(nombre == admin && passwrd == pass){
     alert(`Bienvenido ${nombre}`);
      setverpass(true);
      return;
    }
    else{
      alert('Error Datos ingresados incorrectos!');
    }
  
}

useEffect(()=>{




},[])
  return (
    <>
   

 {verpass ? <CrudApp/>: null}

    </>
  )
}

export default App
