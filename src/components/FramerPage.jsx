import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import phoneImage from "../assets/phone2.png";
import coinImage from "../assets/coin2.png";
import mugImage from "../assets/mugImage.png";

const FramerPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [imagesVisible, setImagesVisible] = useState(true);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollY > 160) {
      setImagesVisible(false);
    } else {
      setImagesVisible(true);
    }
  }, [scrollY]);

  const opacity = scrollY <= 80 ? 1 : scrollY <= 160 ? 0.53 : 0.02;
  const scale = scrollY <= 80 ? 1 : scrollY <= 160 ? 0.765 : 0.51;
  const scale2 = scrollY <= 80 ? 1 : scrollY <= 160 ? 0.765 : 0.765;

  const containerStyle = {
    overflow: "auto",
    minHeight: "120vh",
    background: imagesVisible ? "black" : "white",
    position: "relative",
  };

  const imageStyle = 
    {
      opacity: 1,
      width: "100%",
      zIndex: "2",
      padding: "10px",
    }

  return (
    <>
      <style>
        {`
      img {
        width: 155px;
        height: auto;
      }
    `}
      </style>
      <motion.div style={containerStyle} transition={{ duration: 0.7 }}>
        <motion.h1
          style={{
            opacity: opacity,
            scale: scale,
            fontSize: "54px",
            paddingTop: "120px",
            paddingBottom: "32px",
          }}
          animate={{ opacity: opacity, scale: scale }}
          transition={{ duration: 0.4 }}
        >
          Бонусы в касание
        </motion.h1>
        <motion.div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            position: "fixed",
          }}
        >
          <motion.img
            src={mugImage}
            // пример как сделать сслыку src="ссылка" 
            alt="Image 1"
            style={{
              opacity: opacity,
              scale: scale,
              zIndex: "1",
              position: "absolute",
              left: "-70px",
              bottom: "212px",
              width: "280px",
            }}
            animate={{ opacity: opacity, scale: scale }}
            transition={{ duration: 0.4 }}
          />
          <motion.img
            src={phoneImage}
            // пример как сделать сслыку src="ссылка"  
            alt="Image 3"
            style={imageStyle}
            animate={{ scale: scale2 }}
            transition={{ duration: 0.4 }}
          />
          <motion.img
            src={coinImage}
            // пример как сделать сслыку src="ссылка" 
            alt="Image 2"
            style={{
              opacity: opacity,
              scale: scale,
              zIndex: "3",
              position: "absolute",
              right: "-15px",
            }}
            animate={{ opacity: opacity, scale: scale }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>
      </motion.div>
      <div style={{ height: "100vh", backgroundColor: "#fff" }}>
        <p style={{ textAlign: "center" }}>Второй блок</p>
      </div>
      <div style={{ height: "100vh", backgroundColor: "#000" }}>
        <p style={{ textAlign: "center" }}>Второй блок</p>
      </div>
    </>
  );
};

export default FramerPage;
