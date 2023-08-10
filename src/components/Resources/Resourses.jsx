import Header from "../Header/Header"
import "./Resourses.css"
import css from "../TopCourses/TCourse.module.scss";
import React from 'react'
import { fadeIn, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";
import { motion } from "framer-motion";
import {GrDownload} from "react-icons/gr"
import Footer from "../Footer/Footer";

const Resourses = () => {
  return (
    <>
        <Header/>

        <motion.section
        variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`paddings ${css.wrapper}`}>

        <p className="nt-title" >
            Download free notes from here 
        </p>

        <motion.div className="note-section" variants={fadeIn("up", "tween", .2, .6)} >
            <motion.div variants={fadeIn("up", "tween", .2, .6)} className="note-wrapper">
                <span className="note-name" >C++ Notes</span>
                <a href="./C++ NOTES.pdf" download>
                    <button className="download-btn"><GrDownload/></button>
                </a>
            </motion.div>

            <motion.div variants={fadeIn("up", "tween", .2, .6)} className="note-wrapper">
                <span className="note-name" >Java Notes</span>
                <a href="./JAVA PROGRAMMING.pdf" download>
                    <button className="download-btn"><GrDownload/></button>
                </a>
            </motion.div>

            <motion.div variants={fadeIn("up", "tween", .2, .6)} className="note-wrapper">
                <span className="note-name" >HTML Notes</span>
                <a href="../../../public/HTML(WT) Lecture Notes.pdf" download>
                    <button className="download-btn"><GrDownload/></button>
                </a>
            </motion.div>

            <motion.div variants={fadeIn("up", "tween", .2, .6)} className="note-wrapper">
                <span className="note-name" >Python Notes</span>
                <a href="../../../public/Python_Complete_Notes.pdf" download>
                    <button className="download-btn"><GrDownload/></button>
                </a>
            </motion.div>

            <motion.div variants={fadeIn("up", "tween", .2, .6)} className="note-wrapper">
                <span className="note-name" >Javascript Notes</span>
                <a href="../../../public/JavaScript-Handwritten-Notes.pdf" download>
                    <button className="download-btn"><GrDownload/></button>
                </a>
            </motion.div>

            <motion.div variants={fadeIn("up", "tween", .2, .6)} className="note-wrapper">
                <span className="note-name" >CSS Notes</span>
                <a href="../../../public/CSS_Complete_Notes.pdf" download>
                    <button className="download-btn"><GrDownload/></button>
                </a>
            </motion.div>
            
        </motion.div>

        </motion.section>
        <Footer/>
    </>
  )
}

export default Resourses