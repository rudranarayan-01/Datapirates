import { DiJava } from "react-icons/di";
import { FaPython } from "react-icons/Fa";
import { CgWebsite } from "react-icons/Cg";
export const projectExperience = [
  {
    name: "Java",
    cost: "FREE",
    icon: DiJava,
    bg: "#286F6C",
  },
  {
    name: "Python",
    cost: "FREE",
    icon: FaPython,
    bg: "#EEC048",
  },
  {
    name: "Web Development",
    cost: "FREE",
    icon: CgWebsite,
    bg: "#F26440",
  },
];

export const WhatDoIHelp = [
  "We will prepare candidates for technical interviews, we also help companies identify top technical talent. From sponsoring contests to providing online assessments and training, we offer numerous services to businesses.",
  "We create a bridge of knowledge gap between college and job industry."
];

export const workExp = [
  {
    place: "Multiple Courses",
    tenure: "",
    role: "Develop skills for real career growth",
    detail:
      "Cutting-edge curriculum designed in guidance with industry and academia to develop job-ready skills",
  },
  {
    place: "Live Classes",
    tenure: "",
    role: "Learn from experts active in their field, not out-of-touch trainers",
    detail:
      "Leading practitioners who bring current best practices and case studies to sessions that fit into your work schedule.",
  },
  {
    place: "Free Certificate",
    tenure: "",
    role: "Structured guidance ensuring learning never stops",
    detail:
      "24x7 Learning support from mentors and a community of like-minded peers to resolve any conceptual doubts",
  },
];

export const comments = [
  {
    name: "Rudranarayan Sahu",
    post: "Web Developer",
    comment:
      "Strongly proficient in multiple programming languages and various frameworks. Ability to translate business requirements into technical solutions. ",
    img: "./rudra.jpg",
  },
  {
    name: "Balaram Sahu",
    post: "Senior Cloud Developer, Dell.inc",
    comment:
      "Technology excites me and I am always in awe of the change it drives in the world. Looking to start something new....!! ",
    img: "./bapu.png",
  },
  {
    name: "Sekhar Suman Mohanta",
    post: "Web Designer",
    comment:
      "I want to make beautiful things, even if nobody cares, as opposed to ugly things. That's my intent. ",
    img: "./sekhar.jpg",
  },
  {
    name: "Rajesh Kumar Sahu",
    post: "Python Developer, Infosys",
    comment:
      "Working as a Python developer at Infosys. My work is to Automate the things  using python and also Deployment the applications at Linux, Windows, docker and Kubernative platform",
    img: "./rajesh.png",
  },
  {
    name: "Subhamshree Gopal",
    post: "Freelancer",
    comment:
      "No matter how much experience you have, how many degrees you have, or how well-known you have become — there is always something new to learn",
    img: "./gopal.jpg",
  },
  {
    name: "Alisha",
    post: "Freelancer",
    comment:
      "Don’t get distracted. Never tell yourself that you need to be the biggest brand in the whole world. Start by working on what you need at the present moment and then what you need to do tomorrow. So, set yourself manageable targets.",
    img: "./alisha__.jpg",
  },
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
