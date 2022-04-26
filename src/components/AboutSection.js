import React from 'react'
import home1 from '../img/home1.png'
import {About, Description, Image} from '../styles'

function AboutSection() {
    return (
        <About>
            <Description>
                <div className="title">
                    <div className="hide">
                        <h2>We work to make</h2>
                    </div>
                    <div className="hide">
                        <h2>your <span>dreams</span></h2>
                    </div>
                    <div className="hide">
                        <h2>come true</h2>
                    </div>
                    <p>Contact us for photography or videography ideas that you have.We have proffetionals with good skills.</p>
                    <button>Contact us</button>

                </div>
            </Description>
            <Image>
                <img src={home1} alt="" />
            </Image>
        </About>
    )
}






export default AboutSection