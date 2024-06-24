import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Components/Home';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Route,Routes
} from "react-router-dom";

function App() {
  // const [action, setAction] = useState("login");

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Signup />} />
         <Route path="/login" element={<Login />} />  
        <Route path="/home" element={<Home />} />
        <Route path="/about/:email" element={<About />} />
        <Route path="/signup" element={<Signup />} />



      </Routes>
      {/*     
     <div className="App">
       <Header setAction={setAction}/>
    
    
       {action === "signup" ? <SignupForm setAction={setAction} /> : <LoginForm setAction={setAction} />} 
     </div> */}
    </>
  );
}

export default App;
