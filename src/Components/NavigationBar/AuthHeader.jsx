import React from 'react';
import { Link } from 'react-router-dom';






const AuthHeader = ({ user, logout }) => {
  return (
    <div>
      <div className="header">
        <nav className="nav">
          <div className="nav-logo">
            <p>LOGO</p>
          </div>
          <div className="nav-items">
            <ul>
               <Link to="home" className="link">Home &nbsp; </Link> 
              <Link to="/services" className="link" >Services &nbsp; </Link>
              <Link to="/contacts" className="link" >Contacts &nbsp; </Link>
              {/* <Link to="/blog" className="link"> Blog &nbsp; </Link> */}
              <Link to="/about" className="link"> About &nbsp; </Link>
            </ul>
          </div>
          <div className="nav-button">
            {/* <button className="btn" id="loginBtn" onClick={()=>goTo("login")}>Sign In</button>
            <button className="btn" id="registerBtn" onClick={()=>goTo("signup")}>Sign Up</button> */}
            <Link to="/about" > {user?.email} &nbsp; </Link>
            <button className="log_out" onClick={logout}> Logout </button>

          </div>
          <div className="nav-items-btn">
          </div>
        </nav>
      </div>


    </div>
  )
}

export default AuthHeader;




