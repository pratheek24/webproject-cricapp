
// import {NavLink} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css"


// function Nav(){
// return(

    
// <nav class="navbar navbar-expand-sm navbar-default navbar-fixed-top bg-dark navbar-dark">
//           <ul className="header navbar-nav">
//             <li class="nav-item"><NavLink class="nav-link nav-font" to="/score">Today's Matches</NavLink></li>
//             <li class="nav-item"><NavLink class="nav-link nav-font" to="/schedule">International Fixtures</NavLink></li>
//             <li class="nav-item"><NavLink class="nav-link nav-font" to="/upcoming">Upcomig Fixtures</NavLink></li>
//             <li class="nav-item"><NavLink class="nav-link nav-font" to="/signin">Signin</NavLink></li>
//             <li class="nav-item"><NavLink class="nav-link nav-font" to="/Signup">Signup</NavLink></li>
//           </ul>
//     </nav>
// )} 

// export default Nav;

import React from "react";
import { FaAlignJustify } from "react-icons/fa";
const Nav = () => {
  const [state, setState] = React.useState(true);
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark  aa ">
     
      <div className="container">
        <div className="navbar__container">
          
          <ul className=" nav navbar-nav">
         
              <a href="/"><div className="navbar__left-logo">
              <img  class="logo"src="logo.png" alt="logo" />
              </div></a>
              
            
          </ul>
          {state ? (
            <ul className="header navbar-nav navbar__right  navbar-nav">
             
              <li class="navbar-item">
                <a  class="nav-link" href="http://localhost:3000/signup">signup</a>
              </li>
              <li class="navbar-item">
                <a class="nav-link" href="http://localhost:3000/signin">signin</a>
              </li>
              <li class="navbar-item">
                <a class="nav-link" href="http://localhost:3000/score">Today's Matches</a>
              </li>
              <li class="navbar-item">
                <a class="nav-link" href="http://localhost:3000/schedule">International match</a>
              </li>
              <li class="navbar-item">
                <a class = "nav-link" href="http://localhost:3000/upcoming">Upcoming fixtures</a>
              </li>
              
              
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="toggle" onClick={() => setState(!state)}>
        <FaAlignJustify />
      </div>
    </nav>
  );
};

export default Nav;