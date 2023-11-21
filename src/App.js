import logo from './logo.svg';
import './App.css';
import Homepg from './Homepage/Homepg';
import LoginSignup from './Sign/Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './SignUp/Sign';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
           <Route path='/h' element={<LoginSignup/>}/>
           <Route path='/'element={<Homepg/>}/>
           <Route path='/h/signup' element={<Signup/>}/>
      </Routes>
      </BrowserRouter>
     
      
    </div>
  );
}

export default App;
