import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import phoneImage from "../assets/phone.svg";
import coinImage from "../assets/coins.svg";
import mugImage from "../assets/mug.svg";

const TestPage = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const opacity = scrollY <= 200 ? 1 : scrollY <= 800 ? 0.53 : 0.02;
  const scale = scrollY <= 200 ? 1 : scrollY <= 800 ? 0.765 : 0.51;
  const scale2 = 0.78;

  return (
    <>
      <style>
        {`
          body, html {
            margin: 0;
            overflow-y: auto;
            height: 200vh;
          }
          .image-container {
            position: relative;
            min-height: 150vh;
            background: black;
            padding-top: 1vh;
          }
          .image-container img {
            position: sticky;
            top: 50%;
            transform: translateY(-50%);
          }
        `}
      </style>
      <div className="image-container">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center" }}
        >
          Вкусные бонусы
        </motion.h1>
        <motion.div
          style={{
            display: "flex",
            position: "sticky",
            top: "20rem",
            justifyContent: "center",
          }}
        >
          <motion.img
            src={mugImage}
            alt="Image 1"
            style={{ opacity: opacity, scale: scale }}
            animate={{ opacity: opacity, scale: scale }}
            transition={{ duration: 0.5 }}
          />
          <motion.div>
            <motion.img
              src={phoneImage}
              alt="Image 3"
              style={{ opacity: 1, transform: "scale(0.78)" }}
              animate={{ scale: scale2 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
          <motion.img
            src={coinImage}
            alt="Image 2"
            style={{ opacity: opacity, scale: scale }}
            animate={{ opacity: opacity, scale: scale }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      </div>
      <div style={{ height: "100vh", backgroundColor: "#fff" }}>
        <p style={{ textAlign: "center", paddingTop: "50px" }}>Второй блок</p>
      </div>
    </>
  );
};

export default TestPage;
