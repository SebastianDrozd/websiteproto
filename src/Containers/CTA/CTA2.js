import React from 'react'
import './CTA2.css'
import doodle from '../../assets/doodle.svg'
import scene from '../../assets/sceneyo.svg'
import tree from '../../assets/tree.png'
const CTA2 = () => {
    return (
        <div>
            <div className="main-outer-flex">
                <div className="inner-flex-item item2">
                    <div>
                        <img src={tree} width='600' height='400' alt="" />
                    </div>
                </div>
                <div  className="inner-flex-item item2">
                    <div id="hero-image" className="inner-info">
                        <h1 className="cta2-inner-h1">Connect To The World</h1>
                        <p className="cta2-inner-p">In A Different Place!</p>
                        <p className="cta2-inner-p2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend purus a convallis dictum. Sed nec ligula non magna porta finibus. Nam pulvinar felis purus, eu auctor lacus lacinia in. Donec nibh lectus, pretium sit amet luctus vitae, scelerisque eu dui. Nunc euismod massa quam, vel scelerisque lectus fermentum quis. Ut posuere convallis congue. Ut fringilla posuere vehicula.</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default CTA2
