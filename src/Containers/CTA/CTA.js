import React from 'react'
import './CTA.css'
import lower from '../../assets/lower.svg'
const CTA = () => {
    return (
        <div style={{padding: '2em'}}>
        <div  className="cta-container">
             <h1 className="cta-header">Transparent Pricing</h1> 
             <p className="sub-header">Pricing built for people just like you</p>
             
             <div id='hero-image2'  className="cta-header-cards">
             <div class="pricing-card">
    <h3 class="pricing-card-header">Personal</h3>
    <div class="price"><sup>$</sup>15<span>/MO</span></div>
    <ul>
      <li><strong>3</strong> Websites</li>
      <li><strong>20 GB</strong> SSD</li>
      <li><strong>1</strong> Domain Name</li>
      <li><strong>5</strong> Email</li>
      <li><strong>1x</strong> CPU & RAM</li>
    </ul>
    <a href="#" class="order-btn">Order Now</a>
  </div>
  <div class="pricing-card">
    <h3 class="pricing-card-header">Expert</h3>
    <div class="price"><sup>$</sup>29<span>/MO</span></div>
    <ul>
      <li><strong>3</strong> Websites</li>
      <li><strong>20 GB</strong> SSD</li>
      <li><strong>1</strong> Domain Name</li>
      <li><strong>5</strong> Email</li>
      <li><strong>1x</strong> CPU & RAM</li>
    </ul>
    <a href="#" class="order-btn">Order Now</a>
  </div>
  <div class="pricing-card">
    <h3 class="pricing-card-header">Enterprise</h3>
    <div class="price"><sup>$</sup>99<span>/MO</span></div>
    <ul>
      <li><strong>3</strong> Websites</li>
      <li><strong>20 GB</strong> SSD</li>
      <li><strong>1</strong> Domain Name</li>
      <li><strong>5</strong> Email</li>
      <li><strong>1x</strong> CPU & RAM</li>
    </ul>
    <a href="#" class="order-btn">Order Now</a>
  </div>
             </div>
        </div>
        </div>
    )
}

export default CTA
