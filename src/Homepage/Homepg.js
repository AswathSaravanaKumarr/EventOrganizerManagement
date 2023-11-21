import React from 'react'
import l1 from './l1.png'
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import './Homepg.css'
import OutlinedTimeline from './Timeline';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


export default function Homepg() {

    const navigate=useNavigate();
    const handleSign=()=>{
        navigate('/h');
    };
  return (
    <div className='Home'>
      
        <div className='Navbar'>
            <div className='nav-left'>
                <div className='logo'style={{color:'white',display:'flex'}}>
                   <a href='http://localhost:3000/'> <img src={l1} alt='Elite Event architect' height={60}/></a>
                    
                </div>
            </div>
            <div className="nav-right">
                    <a >
                        <span className='home'>Home</span>
                    </a>
                    <a>
                        <span className='about'>About</span>
                    </a>
                    <a>
                        <span className='contact'>Contact Us</span>
                    </a>
                    <a>
                        <button onClick={handleSign} style={{backgroundColor:null}} className='signup'>LogIn</button>
                    </a>
            </div>
        </div>
            <div className='intro'>
                {/* <img src='https://wallpapercave.com/wp/wp10715775.jpg' style={{}}></img> */}
                <div>

                <p className='para'>Welcome to the Elite Event Architect Management System!

We're delighted to welcome you to our exclusive platform designed to elevate your event planning and management experience. At Elite Event Architect, we understand that creating extraordinary events requires precision, creativity, and seamless coordination. Our management system is meticulously crafted to empower you with the tools and features needed to design and execute events that leave a lasting impression.

As you explore the Elite Event Architect Management System, you'll find a suite of intuitive and powerful features to simplify every aspect of event planning. From attendee registration and engagement tracking to budget management and promotional strategies, our platform is your key to unlocking unparalleled event success.

Our commitment to excellence extends beyond our platform, as our team is dedicated to providing top-notch support and continuous updates to enhance your event planning journey. Whether you're organizing corporate conferences, community gatherings, or social celebrations, Elite Event Architect is here to make your vision a reality.

Thank you for entrusting us with your events. Let's collaborate to architect unforgettable experiences together!</p>
               
                </div>
                <div>
                    <img src='https://thumbs.dreamstime.com/b/hand-marker-writing-event-management-concept-93231543.jpg' alt='Elite' height={400} width={700}></img>
                </div>
            </div>
                    <hr style={{paddingLeft:10,paddingRight:10}}></hr>
          
                
            <OutlinedTimeline/>
            
            <div className='footer'>
          <h2  style={{color:"black",fontWeight:"900",margin:"10px"}}>Follow Us</h2>
          <div className="social-icons" >
            <a href="https://www.facebook.com" target="_blank" >
              <FaFacebook  className='ic'/>
            </a>
            <a href="https://www.twitter.com" target="_blank">
              <FaTwitter  className='ic'/>
            </a>
            <a href="https://www.linkedin.com" target="_blank">
              <FaLinkedin className='ic'/>
            </a>
            <a href="https://www.instagram.com" target="_blank">
              <FaInstagram className='ic'/>
            </a>
          </div>
            </div>
    </div>
  )
}
