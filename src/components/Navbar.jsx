import React from 'react'
import Solid from '../assets/image/solid.svg'

const Navbar = () => {
  return (
    <div className="container">
    
    <a className="logo" href="Index.html"><img src={Solid} /></a>
        

    <nav id="main-menu" className="navbar">
        <a className="navigate" href="#">Features</a>
    </nav>


    
    <div id="darkmode-switch" className="button-switch">
        <span className="darkmode">Dark mode</span>
        <input type="checkbox" id="darkmode-toggle" className="switch-input"/>
        <label htmlFor="darkmode-toggle" className="switch-label"></label>
    </div>
    

    <a id="sign-in" href="#" className="sign-in-buttonprime">
        <i className="fa-thin fa-user"></i>
        <span>Sign in / Sign up</span>
    </a>

    <button className="mobile-button">
        <i className="material-symbols-outlined">
            menu
        </i>
    </button>
</div>
  )
}

export default Navbar