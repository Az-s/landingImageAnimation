// import { useState, useEffect } from "react";
import { motion, useScroll  } from "framer-motion";
import phoneImage from "../assets/phone.svg";
import coinImage from "../assets/coins.svg";
import mugImage from "../assets/mug.svg";

const TestTwo = () => {
    const { scrollY } = useScroll();



  return (
    <>

      <div style={{minHeight: '1000px',paddingBottom: '1000px', overflow: 'scroll'}}>
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
            transition={{ duration: 0.5 }}
          />
          <motion.div>
            <motion.img
              src={phoneImage}
              alt="Image 3"
              style={{ opacity: 1, transform: "scale(0.78)" }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
          <motion.img
            src={coinImage}
            alt="Image 2"
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

export default TestTwo;