import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import phoneImage from "../assets/Group.png";
import coinImage from "../assets/Coins2.png";
import mugImage from "../assets/mugImage.png";
import imageTwo from "../assets/2.png";
import imageTwelve from "../assets/12.png";
import imageThirteen from "../assets/13.png";
import imageSeventeen from "../assets/17.png";
import SaqtaImg from "../assets/SaqtaLogo.png";
import "../App.css";

const AnimationPage = () => {
  const controls = useAnimation();
  const [scrollY, setScrollY] = useState(0);
  const [background, setBackground] = useState("black");
  const [showNewElements, setShowNewElements] = useState(false);
  const backgroundChangeHeight = 200;

  const handleScroll = () => {
    requestAnimationFrame(() => {
      setScrollY(window.scrollY);
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollY >= backgroundChangeHeight) {
      setBackground("white");
      setShowNewElements(true);
    } else {
      setBackground("black");
      setShowNewElements(false);
    }
  }, [scrollY]);

  useEffect(() => {
    controls.start({ backgroundColor: background });
  }, [background, controls]);

  const opacity = scrollY <= 80 ? 1 : scrollY <= 160 ? 0.53 : 0.02;
  const scale = scrollY <= 80 ? 1 : scrollY <= 160 ? 0.765 : 0.51;
  const scale2 = scrollY <= 10 ? 1 : scrollY <= 80 ? 0.765 : 0.765;

  return (
    <>
      <motion.div
        style={{ backgroundColor: background }}
        animate={{ controls }}
        transition={{ duration: 1 }}
        className="animation-page"
      >
        <motion.img src={SaqtaImg} alt="Saqta" className="logoSaqta"/>
        <motion.h1
          className="fade-header"
          whileInView={{ opacity: opacity, scale: scale }}
          transition={{ duration: 0.4 }}
        >
          Отличная еда <span> <br /> по отличной цене</span>
        </motion.h1>
        <motion.div className="animation-container">
          <motion.img
            src={mugImage}
            alt="Mug"
            className="mug-image"
            animate={{ opacity: opacity, scale: scale }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            src={phoneImage}
            alt="Phone"
            className="phone-image"
            animate={{ scale: scale2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
          <motion.img
            src={coinImage}
            alt="Coins"
            className="coins-image"
            animate={{ opacity: opacity, scale: scale }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>
        {showNewElements && (
          <motion.div
            className="new-elements"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
             <p>при этом приносить <br /> пользу планете</p>
            <div className="images">
              <img src={imageTwo} alt="Картинка снизу" />
              <img src={imageTwelve} alt="Картинка снизу" />
              <img src={imageThirteen} alt="Картинка снизу" />
              <img src={imageSeventeen} alt="Картинка снизу" />
            </div>
          </motion.div>
        )}
      </motion.div>
      <div className="second-block">
        <p>Второй блок</p>
      </div>
    </>
  );
};
export default AnimationPage;
