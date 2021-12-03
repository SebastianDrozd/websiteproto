import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Containers/Navbar/Navbar";
import Header from "./Containers/Header/Header";
import CTA from "./Containers/CTA/CTA";
import CTA2 from "./Containers/CTA/CTA2";
import { useEffect, useState } from "react";
import Contact from "./Containers/Contact/Contact";
import Footer from './Containers/footer/Footer'
function App() {
  const [offset, setOffset] = useState(0);
 
  useEffect(() => {
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
    };
   
    
  
  let observer = new IntersectionObserver(callbackFunc, options);
  
  observer.observe(document.getElementById('hero-image'));
  observer.observe(document.getElementById('hero-image2'));
  },[])
  function callbackFunc(entries, observer)
{
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('inview');
    }else{
      entry.target.classList.remove('inview');
    }
    
  
  });
}
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
    <div>
      <div className="section2" >
     
        <Header />
      </div>
      <section>
      <div className="section2">
      <CTA2/>
      </div>
      </section>
      <div className="cta-and-contact" style={{
            transform: `translateY(${offset * 0.0}px)`,
          }}>
      <section>
      <div className=" section2 section22 " >
        <CTA/>
      </div>
      </section>
      <section>
      <div className=" section2 section23">
        <Contact/>
        
      </div>
      <div>
     
      </div>
      </section>
     
      </div>
      <Footer/>
    </div>
  );
}

export default App;
