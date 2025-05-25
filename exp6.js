import React,{useState} from "react";
const SimpleForm=()=>{
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[showPassword,setShowPassword]=useState(false);
    const[error,setError]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!name||!email.includes("@gmail.com")||password.length<6){
            setError("please enter valid detils");
        }
        else{
            setError("");
            console.log("submitted",{name,email,password});
        }
    };
    return(
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />
            <br/>
            <input
             type="email"
             placeholder="Email"
             value={email}
             onChange={(e)=>setEmail(e.target.value)}
            />
            <br/>
            <input
             type={showPassword ? "text" : "password"}
             placeholder="Passsword"
             value={password}
             onChange={(e)=> setPassword(e.target.value)}
        />
        <button type="button" onClick={()=>setShowPassword(!showPassword)}>
        {showPassword?"Hide":"show"}
    </button>
    <br/> 
    {error && <p style={{color:'red'}}>{error}</p>}  
    <button type="submit">submit</button>    
    </form> 
        
    );
};
export default SimpleForm;


import React from 'react';
import './App.css';
import SimpleForm from './SimpleForm';

function App() {
  return (
    <div className="App">
      <Form />
    </div>
  );
}
export default App;


