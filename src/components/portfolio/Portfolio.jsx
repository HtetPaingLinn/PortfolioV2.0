import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Todo List",
    img: "https://images.pexels.com/photos/5717411/pexels-photo-5717411.jpeg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    link: "https://github.com/HtetPaingLinn/todoWebReact",
  },
  {
    id: 2,
    title: "Fitfinity Fitness Website",
    img: "https://img.freepik.com/free-photo/people-doing-indoor-cycling_23-2149270268.jpg?t=st=1714894952~exp=1714898552~hmac=9cd7e5627ca8327d26d91954ef903bc7e5cde5bb3799ddce78e92ac6622e1b42&w=996",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    link: "https://github.com/HtetPaingLinn/FitfinityGymWeb",
  },
  {
    id: 3,
    title: "Fitfinity Healthcare Web Application",
    img: "https://img.freepik.com/free-photo/asian-medical-doctor-take-care-explain-senior-elderly-woman-female-patient-wheelchair-with-tablet-looking-camera_554837-54.jpg?t=st=1714894399~exp=1714897999~hmac=357d6ef427c705f74ad59c0a3f0712fef6e4bd9db41c788e9812fc5876d1b526&w=996",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    link: "https://github.com/HtetPaingLinn/FitfinityHealthcareWebsiteJ2EE",
  },
  {
    id: 4,
    title: "Vintage Car Really",
    img: "https://images.pexels.com/photos/248687/pexels-photo-248687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    link: "https://github.com/HtetPaingLinn/VintageCarRallyWebsite",
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
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
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
