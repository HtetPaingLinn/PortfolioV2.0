import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Fitfinity MedAI Diagnostic Bot Web Application",
    img: "https://images.pexels.com/photos/3952224/pexels-photo-3952224.jpeg",
    desc: "A diagnostic bot web application that uses AI to assist users in identifying potential health issues based on symptoms.",
    languages: ["Laravel", "PHP", "Prolog", "React", "Node.js"],
    link: "https://github.com/HtetPaingLinn/Fitfinity-MedAI-Diagnostic-Bot-Web-Application",
  },
  {
    id: 2,
    title: "ProLearn Virtual Learning Environment",
    img: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg",
    desc: "An e-learning platform designed to create a virtual learning environment with courses, quizzes, and interactive lessons.",
    languages: ["JavaScript", "React", "Node.js", "MongoDB"],
    link: "https://github.com/HtetPaingLinn/ProLearn-Virtual-Learning-Environment",
  },
  {
    id: 3,
    title: "Fitfinity Healthcare Web Application",
    img: "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg",
    desc: "A healthcare application providing services like appointment booking, health tracking, and patient records.",
    languages: ["Java", "J2EE", "SQL", "Bootstrap"],
    link: "https://github.com/HtetPaingLinn/FitfinityHealthcareWebsiteJ2EE",
  },
  {
    id: 4,
    title: "Vintage Car Rally",
    img: "https://images.pexels.com/photos/248687/pexels-photo-248687.jpeg",
    desc: "An event website for vintage car enthusiasts to gather, showcase their vehicles, and participate in rallies.",
    languages: ["JavaScript", "HTML", "CSS", "Node.js"],
    link: "https://github.com/HtetPaingLinn/VintageCarRallyWebsite",
  },

  {
    id: 6,
    title: "Fruit Detection",
    img: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg",
    desc: "A fruit detection system that classifies different types of fruit using computer vision techniques.",
    languages: ["Python", "TensorFlow", "OpenCV"],
    link: "https://github.com/HtetPaingLinn/FruitDetection",
  },
  {
    id: 7,
    title: "Fitfinity Fitness Website",
    img: "https://images.pexels.com/photos/949126/pexels-photo-949126.jpeg",
    desc: "A fitness website offering workout plans, fitness tracking, and dietary tips for users.",
    languages: ["JavaScript", "HTML", "CSS"],
    link: "https://github.com/HtetPaingLinn/FitfinityGymWeb",
  },
  {
    id: 8,
    title: "React Todo List",
    img: "https://images.pexels.com/photos/5717411/pexels-photo-5717411.jpeg",
    desc: "A simple and interactive to-do list built with React to help users manage tasks efficiently.",
    languages: ["JavaScript", "React"],
    link: "https://github.com/HtetPaingLinn/todoWebReact",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt={item.title} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <p><strong>Languages:</strong> {item.languages.join(", ")}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <button>See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
