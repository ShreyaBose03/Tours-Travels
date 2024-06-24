import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [inputData, setInputData] = useState({ email: '', password: '' });
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

    // navigate('/about', { state: { email: email, password: password } }); //useLocation

    // navigate(`/about?email=${email}`);//useSearchParams

    navigate(`/about/${email}`);

  }

  return (
    <div>
      <div className="form-box">
        <form onSubmit={handleSubmit}>
          <div className="login-container" id="login">
            <div className="top">
              <span>
                Don't have an account?<a href="#">Sign Up</a>
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
              <button type="submit" className="submit">Submit</button>
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