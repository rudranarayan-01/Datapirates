import "./Certificate.css"
import React from 'react'
import { motion } from "framer-motion";
import { fadeIn, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";

const Certificate = () => {
  return (
    <>
        <motion.div variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className="certificate-wrapper">
            <span  >Earn a career certificate</span>
            <span  >Add this credential to your LinkedIn profile, resume, or CV
                    Share it on social media and in your performance review</span>
            <motion.img className="D-certificate-img"  variants={fadeIn("up", "tween", .2, .6)}  src="./Demo Certificate.png" alt="project" />
            
            </motion.div>
    </>
  )
}

export default Certificate