import React, { useState } from 'react'
import './Style.css'
import { Link, useNavigate } from 'react-router-dom';



function SignupForm() {
  const dataList = { firstname: "", lastname: "", email: "", password: "" };
  const [inputData, setInputData] = useState(dataList);
  const [flag, setFlag] = useState(false);
  const[submitted,setSubmitted]=useState(false);

  function handleData(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputData.firstname || !inputData.lastname || !inputData.email || !inputData.password) {
      alert("All fields are mandatory");
    } else {
      console.log(inputData); // Display data in console
      setFlag(true);
      setSubmitted(true);
    }
  }

  //  const navigatePage=useNavigate();
  //  const showPage=(path)=>{
  //   navigatePage(path)
  //  }

  return (
    <div>
      <pre>{flag && <h2 className="display">Hi!{inputData.firstname},you have signed up successfully.</h2>}</pre>
      <div className="form-box">
        <form onSubmit={handleSubmit}>
          <div className="registration-container" id="register">
            <div className="top" >
              <span>Have an account?<a href="#" onClick={() => setAction("login")}>Login</a> </span>
              <h1>Sign Up</h1>
            </div>
            <div className="two-forms">
              <div className="input-box">
                <input type="text" className="input-field" name="firstname" placeholder="Firstname" value={inputData.firstname} onChange={handleData}></input>
              </div>
              <div className="input-box">
                <input type="text" className="input-field" name="lastname" placeholder="Lastname" value={inputData.lastname} onChange={handleData}></input>
              </div>
            </div>
            <div className="input-box">
              <input type="text" className="input-field" name="email" id="alignment" placeholder="Email" value={inputData.email} onChange={handleData}></input>
            </div>
            <div className="input-box">
              <input type="text" className="input-field" name="password" id="alignment" placeholder="Password" value={inputData.password} onChange={handleData}></input>
            </div>
            <div className="input-box">
              {/* <input type="button" className="submit" value="Register"></input> */}
               <button type="submit" className="submit" value="Login" >Submit</button> 

              {submitted &&
              (<Link to="/login" >Go to Login</Link>)} 

            </div>
            <div className="two-col">
              <div className="one">
                <input type="checkbox" id="register-check"></input>
                <label htmlFor="register-check">Remember Me</label>
              </div>
              <div className="two">
                <label><a href="#">Terms & Condition</a></label>
              </div>
            </div>


          </div>
        </form>

      </div>

    </div>
  )
}

export default SignupForm
