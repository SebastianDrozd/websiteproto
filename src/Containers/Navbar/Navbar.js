import React from 'react'
import './Navbar.css'
const Navbar = () => {
    return (
        <div className="nav-bar">
           
                <div className="brand">
                    <h1>Cool website</h1>
                </div>
                <div className="links">
                    <ul className="links-ul">
                        <li className="links-ul-item">Home</li>
                        <li className="links-ul-item">About</li>
                        <li className="links-ul-item">Features</li>
                        <li className="links-ul-item">Try us out!</li>
                    </ul>
                </div>
          
        </div>
    )
}

export default Navbar
