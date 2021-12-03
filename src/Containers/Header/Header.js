import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import './Header.css'


const Header = () => {
    const [offset, setOffset] = useState(0);
    useEffect(() => {
    
        function handleScroll() {
          setOffset(window.pageYOffset);
        }
      
        window.addEventListener("scroll", handleScroll);
      
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
      
    return (
        <div className="header-container"  >
           <Navbar/>
        </div>
    )
}

export default Header
