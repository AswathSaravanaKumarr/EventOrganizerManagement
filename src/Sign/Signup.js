import React,{useState} from 'react'
import './Signup.css'
import { useNavigate } from 'react-router-dom';


const LoginSignup = () => {

    const navigate=useNavigate();
    const handleSignIn=()=>{
        navigate('/');
    };
    const handleRegister=()=>{
        navigate('signup');
    };
    const[action,setAction] = useState("Login");
    
  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            

            {action==="Login"?<div></div>: <div className="input">
                <input type="text" placeholder = "Name" required/>
            </div>}
           
            <div className="input">
            

                <input type="email" placeholder="Email-ID"/>
            </div>
            <div className="input">
                <input type="password" placeholder="Password"/>
            </div>
           
        </div>
        {action==="Sign Up"?<div></div>:<div className="forgot-password">Forgot Password? <span>Click here</span></div>}
        <div className='btn'><button className='loginbtn' onClick={handleSignIn}>Login</button></div>
        <div className='already'><span>Doesn't have an account ? <a onClick={handleRegister}><span id='r'>Register</span></a></span></div>
        
        {/* <div className="submit-container">
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div> */}
    </div>
  );
};

export default LoginSignup