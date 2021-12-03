import React from 'react'
import './Contact.css'
import cloud from '../../assets/cloud.jpg'
import other from '../../assets/other.png'

const Contact = () => {
    return (
        <div>
            <div style={{display: 'flex',alignItems: 'center',justifyContent: 'space-evenly',paddingTop: '0em'}} className="contact-outer-container" >
            <div style={{flexBasis: '25%',padding: '10em'}} className="contact-inner-item2 floats">
                    
                   
                    <h1 className="contact-header" style={{color: ' #0fbcf9'}}>Leave us a Review</h1>
                    <br />
                    <p className="cta2-inner-p2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend purus a convallis dictum</p>
                    <br />
                    <button className="contact-button2">Get Started</button>
                   
                </div>
                <div style={{flexBasis: '25%',padding: '10em'}} className="contact-inner-item3 floats">
                    
                   
                    <h1 className="contact-header">Contact us today</h1>
                    <br />
                    <p className="cta2-inner-p2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend purus a convallis dictum</p>
                    <br />
                    <button className="contact-button">Get Started</button>
                   
                </div>
            </div>
        </div>
    )
}

export default Contact
