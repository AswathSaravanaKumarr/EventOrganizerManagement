import React,{useState} from 'react'
import './Signpg.css'
import { useNavigate } from 'react-router-dom';


const Signup = () => {
    const navigate=useNavigate();
    const handleSign=()=>{
         navigate('/');
    };
    const[action,setAction] = useState("Sign Up");
    
  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            <div className="input">
                <input type="text" placeholder = "Name"/>
            </div>
           
            <div className="input">
               
                <input type="email" placeholder="Email-ID"/>
            </div>
            <div className="input">
               
                <input type="password" placeholder="Set Password"/>
            </div>
            <div className="input">
               
                <input type="password" placeholder="Confirm Password"/>
            </div>
        </div>
        {/* {action==="Sign Up"?<div></div>:<div className="forgot-password">Forgot Password? <span>Click here</span></div>} */}
        <div className='btn'><button onClick={handleSign} className='signbtn'>SignUp</button></div>
        
        <div className="submit-container">
        {/* <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div> */}
        {/* <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div> */}
        </div>
    </div>
  );
};

export default Signup