import React from 'react';
import './Style.css'
import { Link ,useNavigate} from 'react-router-dom';


function Header() {

  const navigate=useNavigate();
  const goTo = (page) => {
    navigate(page)
}
  return (
    <div>
      <div className="header">
        <nav className="nav">
          <div className="nav-logo">
            <p>LOGO</p>
          </div>
          <div className="nav-items">
            <ul>
               {/* <li><a href="#"className="link" >Home</a></li>
              <li><a href="#" className="link">Services</a></li>
              <li><a href="#" className="link">Contacts</a></li>
              <li><a href="#" className="link">Blog</a></li>
              <li><a href="#" className="link">About</a></li>  */}



                
                 <Link to="/home" className="link">Home &nbsp; </Link>
                <Link to="/services" className="link" >Services &nbsp; </Link>
                <Link to="/contacts" className="link" >Contacts &nbsp; </Link>
                <Link to="/blog" className="link"> Blog &nbsp; </Link>
                <Link to="/about" className="link"> About &nbsp; </Link> 


            </ul>
          </div>
          <div className="nav-button">
            <button className="btn" id="loginBtn" onClick={()=>goTo("login")}>Sign In</button>
            <button className="btn" id="registerBtn" onClick={()=>goTo("signup")}>Sign Up</button>

          </div>
          <div className="nav-items-btn">
            </div>
            </nav>
      </div>



    </div>
  )
}

export default Header
