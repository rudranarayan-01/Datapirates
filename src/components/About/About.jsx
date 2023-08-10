import React from 'react'
import { fadeIn, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";
import { motion } from "framer-motion";
import Header from '../Header/Header';
import "./About.css"
import Footer from '../Footer/Footer';


const About = () => {
  return (
    <>
        <Header/>
         <motion.section 
            variants={staggerChildren}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`paddings`}>
    
        <motion.span variants={textVariant2} className="abt primaryText yPaddings">About Datapirates</motion.span>

        <motion.div className='abt-card' variants={textVariant2} >

            <div className='first'>
                <div>
                    <img src="./rudra.jpg" className='abt-prf' alt="" />
                    <span className="title" style={{marginLeft:"2rem"}} >Rudranarayan Sahu (Founder)</span>
                </div>
                <motion.div  className='about-txt' >Datapirates is the next-generation platform for learning how to code. Our screencasts enable you to interact with the code directly in the player. This way, you'll have more fun and learn faster. Our courses cover subjects like HTML, CSS, JavaScript, React, Python, C, C++, Java, SQL, MongoDb and more. They're all made with the goal of advancing your career. So pick a course and give your career a boost! Our goal is to create the best possible coding platform at the lowest possible cost for students. If we succeed with this, it will give anyone who wants to become a software developer a realistic shot at succeeding. Regardless of where they live and the size of their wallets.</motion.div>
            </div>

            <div className='second'>
                <div>
                    <img src="./sekhar.jpg" className='abt-prf'alt="" />
                    <span className="title">Sekhar Suman Mohanta (Co-founder)</span>
                </div>
                
                <motion.div  className='about-txt' >We welcome you to the platform where we consistently strive to offer the best of education.
This platform has been designed for every geek wishing to expand their knowledge, share their knowledge and is ready to grab their dream job. We have millions of articles, live as well as online courses, thousands of tutorials and much more just for the geek inside you. Thank you for chosing and supporting us.</motion.div>
            </div>

        </motion.div>

    </motion.section>
        <Footer/>
    </>
  )
}

export default About