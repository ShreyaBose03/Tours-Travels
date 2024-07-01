import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/NavigationBar/Header';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Components/Home';
import About from './Components/About';
import Layout from './Components/Layout/Layout';
import AuthHeader from './Components/NavigationBar/AuthHeader';
import UnAuth from './ProtectedRoute/UnAuth';
import WithAuth from './ProtectedRoute/WithAuth';
import './Style.css';

import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";

function App() {
  // const [action, setAction] = useState("login");

  return (
    <>
      {/* <Header/>  
        <AuthHeader/>
        */}
      <Routes>
        <Route path="/" element={<Layout />} >
        
          <Route path="/login" element={<UnAuth><Login/></UnAuth>} />
          
          <Route path="/signup" element={<UnAuth><Signup /> </UnAuth>} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<WithAuth> <About /> </WithAuth>} />
          <Route path="/" element={<UnAuth><Signup /> </UnAuth>} />
        </Route>


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




