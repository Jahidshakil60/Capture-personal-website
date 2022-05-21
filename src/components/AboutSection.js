import React from 'react'
import home1 from '../img/home1.png'
import {About, Description, Image} from '../styles'
import {motion} from 'framer-motion'
import {titleAnim , fade,photoAnim} from "../animation"
import Wave from './Wave'

function AboutSection() {
    return (
        <About>
            <Description>
                <div className="title">
                    <div className="hide">
                        <motion.h2 variants={titleAnim}>We work to make</motion.h2>
                    </div>
                    <div className="hide">
                        <motion.h2 variants={titleAnim}>your <span>dreams</span></motion.h2>
                    </div>
                    <div className="hide">
                        <motion.h2 variants={titleAnim}>come true</motion.h2>
                    </div>
                    <motion.p variants={fade}>Contact us for photography or videography ideas that you have.We have proffetionals with good skills.</motion.p>
                    <motion.button variants={fade}>Contact us</motion.button>

                </div>
            </Description>
            <Image>
                <motion.img variants={photoAnim} src={home1} alt="" />
            </Image>
            <Wave />
        </About>
    )
}






export default AboutSection