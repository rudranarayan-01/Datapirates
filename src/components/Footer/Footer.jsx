import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import {motion} from 'framer-motion'
import {BsInstagram,BsFillTelephoneFill} from "react-icons/Bs"
import {FiMail} from "react-icons/fi"
const Footer = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
      
      
      <motion.div
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className="primaryText">
            Let's make something <br />
            amazing together.
          </span>
          <span className="primaryText">
            Start by <a href="mailto:codingislife01@gmail.com">saying hi</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Information</span>
            <p>Baripada, Odisha, 757001</p>
            <span>India</span>
          </div>

          <ul className={css.menu}>
            <li><FiMail/><a href="mailto:codingislife01@gmail.com" style={{textDecoration:"none"}} >&nbsp;&nbsp;codingislife01@gmail.com</a></li>
            <a href="https://www.instagram.com/datapirates_/" style={{textDecoration:"none"}} target="blank"><li><BsInstagram/>&nbsp;&nbsp;datapirates_</li></a>
            <li><BsFillTelephoneFill/>&nbsp;&nbsp;+91 8260348599</li>
            <li>Privacy policy</li>
          </ul>
        </div>
      </motion.div>
        <span className="secondaryText" style={{margin:"auto",fontSize:"15px",color:"black",display:"block",textAlign:"center",marginTop:"2rem"}}>All rights reserved ©2023</span>
    </motion.section>
  );
};

export default Footer;
