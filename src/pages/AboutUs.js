import React from 'react'
import AboutSection from '../components/AboutSection'
import FaqSection from '../components/FaqSection'
import ServicesSection from '../components/ServicesSection'
//Animation
import {motion} from 'framer-motion'
import {pageAnimation} from '../animation'

function aboutUs() {
  return (
    <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show">
        <AboutSection />
        <ServicesSection />
        <FaqSection />
    </motion.div>
  )
}

export default aboutUs