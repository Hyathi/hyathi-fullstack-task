import React, {useState} from 'react'
import './Register.css'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();



  const handleSubmit = async()=>{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(name.length === 0){
      alert("Input the Username");
    }
    
    else if(!(email.match(mailformat))){
      alert("Write a valid email");
    }
    else if(password.length < 8){
      alert("Password must be greater than equal to 8 alphabets");
    }
    else{
      let result = await fetch('http://localhost:5000/register', {
        method: 'post',
        body: JSON.stringify({name, email, password}),
        headers:{
          'Content-Type':'application/json'
        }
      })

      if(result){
        localStorage.setItem("auth", "result");
        alert('Registeration successful');
        navigate('/')
      }
      else {
        alert('User already exist')
      }

    }

  }

  return (

    <div className='page'>
      
      <div className="main_Box">
        <p className='head'>Register</p>
        <label htmlFor="name" className='colwhite fntsz' >Username</label><br/>
        <input type="text" name="name" id="name" className='inpts colwhite' autoComplete='off' value={name} onChange={(e)=>{setName(e.target.value)}} />

        <label htmlFor="email" className='colwhite fntsz' >Email</label><br/>
        <input type="text" name="email" id="email" className='inpts colwhite' autoComplete='off' value={email} onChange={(e)=>{setEmail(e.target.value)}} />

        <label htmlFor="passwd" className='colwhite fntsz' >Password</label><br/>
        <input type="password" name="passwd" id="passwd" className='inpts colwhite' autoComplete='off' value={password} onChange={(e)=>{setPassword(e.target.value)}} />

        <Button variant="contained" style={{"width":"100%", "marginTop":"15px"}} onClick={handleSubmit} >Submit</Button>

      </div>
      
    </div>
  )
}

export default Register