import React, { useState } from 'react';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';
import storageHandler from './Helper/storageHandler';


function LoginForm() {
  const [inputData, setInputData] = useState({ email: '', password: '' });
  // const[email,setEmail]=useState("");
 const setUser=useOutletContext();
   const navigate = useNavigate();
   

  function handleData(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(inputData); //displaying data in console 

    const email=inputData.email;
    console.log("email",email);

    const password=inputData.password;
    console.log("password",password);

    
      storageHandler.setLocalData({ inputData });
      setUser({email});
      navigate("/about");

      
        
      
      


     

    
    // const loggedUser=JSON.parse(localStorage.getItem("user"));
    // if(inputData.email===loggedUser.email && inputData.password===loggedUser.password)
    //   {
    //     localStorage("loggedIn",true);
    //     navigate("/home");
    //   }
    //   else{
    //     alert("wrong email & password.please check carefully");
    //   }

    

    // navigate('/about', { state: { email: email, password: password } }); //useLocation

    // navigate(`/about?email=${email}`);//useSearchParams

    // navigate(`/about/${email}`); //useparams

  }

  return (
    <div>
      <div className="form-box">
        <form onSubmit={handleSubmit}>
          <div className="login-container" id="login">
            <div className="top">
              <span>
                Don't have an account?<Link to="/signup" >Sign Up</Link>
              </span>
              <h1>Login</h1>
            </div>

            <div className="input-box">
              <input
                type="text"
                className="input-field"
                name="email"
                placeholder="Email"
                value={inputData.email}
                onChange={handleData}
              />
            </div>
            <div className="input-box">
              <input
                type="password"
                className="input-field"
                name="password"
                placeholder="Password"
                value={inputData.password}
                onChange={handleData}
              />
            </div>
            
            <div className="input-box">
              <button type="submit" className="submit" >Submit</button>
            </div>

            <div className="two-col">
              <div className="one">
                <input type="checkbox" id="login-check" />
                <label htmlFor="login-check">Remember Me</label>
              </div>
              <div className="two">
                <label><a href="#">Forgot Password?</a></label>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;