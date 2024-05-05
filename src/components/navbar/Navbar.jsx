import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { color, motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Thehpl Dev
        </motion.span>
        <div className="social">
          <a href="https://www.facebook.com/htetpainglinn28" target="_blank">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="https://www.instagram.com/thehpl" target="_blank">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/htetpainglinn" target="_blank">
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="https://github.com/htetpainglinn" target="_blank">
            <img src="/github.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
