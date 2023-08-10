import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";
import css from "./TCourse.module.scss";
import { Link } from "react-router-dom";
const TCourses = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>

      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>


        <motion.div variants={textVariant(.4)} className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">Top Courses</span>
            <p style={{marginTop: "10px"}}>We make programming simple & easy to understand.</p>
          </div>
          <Link to="/courses">
          <span className="secondaryText">Explore more courses</span>
          </Link>
        </motion.div>


        <div className={`flexCenter ${css.showCase}`}>
            <motion.div variants={fadeIn("up", "tween", .2, .6)} className={ `${css.card}`} style={{flexDirection:"column"}}>
              <motion.img variants={fadeIn("up", "tween", .5, .6)} style={{width:"100%",height:"70%"}} src="./cppx.jpg" alt="project" />
              <span style={{color:"black",fontSize:"1.3rem",marginTop:"2rem",fontWeight:"bold"}}>C++</span>
              <span style={{color:"green",marginTop:"1rem",fontWeight:"bold"}} >FREE</span>
              <span style={{color:"#191970",marginTop:"1rem",fontWeight:"bold"}} >Get certified</span>
              <p style={{textAlign:"center",padding:"1rem"}} > This is a basic course that aims at providing basic information and skills of C++ language to the scholars.</p>
            </motion.div>
            
            <motion.div variants={fadeIn("up", "tween", .2, .6)} className={ `${css.card}`} style={{flexDirection:"column"}}>
              <motion.img style={{width:"100%",height:"70%"}} variants={fadeIn("up", "tween", .7, .6)} src="./python.png" alt="project" />
              <span style={{color:"black",fontSize:"1.3rem",marginTop:"2rem",fontWeight:"bold"}}>Python Beginner</span>
              <span style={{color:"green",marginTop:"1rem",fontWeight:"bold"}} >FREE</span>
              <span style={{color:"#191970",marginTop:"1rem",fontWeight:"bold"}} >Get certified</span>
              <p style={{textAlign:"center",padding:"1rem"}} > The course teaches you the essential concepts of Python programming, and gives you an in-depth knowledge in data analytics, machine learning, etc. </p>
            </motion.div>

            <motion.div variants={fadeIn("up", "tween", .2, .6)} className={ `${css.card}`} style={{flexDirection:"column"}}>
              <motion.img style={{width:"100%",height:"70%"}} variants={fadeIn("up", "tween", .9, .6)} src="./webdevelopment.jpg" alt="project" />
              <span style={{color:"black",fontSize:"1.3rem",marginTop:"2rem",fontWeight:"bold"}}>Web Development Beginner</span>
              <span style={{color:"green",marginTop:"1rem",fontWeight:"bold"}} >FREE</span>
              <span style={{color:"#191970",marginTop:"1rem",fontWeight:"bold"}} >Get certified</span>
              <p style={{textAlign:"center",padding:"1rem"}} > In this course we learn about website design using HTML, CSS and Javascript and create front-end website and learn about its deployment.</p>
            </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default TCourses;
