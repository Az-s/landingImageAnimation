import { useEffect , useState} from "react";
import { motion } from "framer-motion";
import phoneImage from "../assets/phone.svg";
import coinImage from "../assets/coins.svg";
import mugImage from "../assets/mug.svg";

const FramerPage = () => {
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

  return (
    <>
      <div style={{ minHeight: "150vh", background: "black" }}>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Вкусные бонусы
        </motion.h1>
        <motion.div style={{ display: "flex", flexDirection: "row" }}>
          <motion.img
            src={mugImage}
            alt="Image 1"
            style={{ opacity: opacity, scale: scale }}
            animate={{ opacity: opacity, scale: scale }}
            transition={{ duration: 0.5 }}
          />
          <motion.img
            src={phoneImage}
            alt="Image 3"
            style={{ opacity: 1, transform: "scale(0.78)" }}
            animate={{ scale: scale }}
            transition={{ duration: 0.5 }}
          />
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
        <p style={{ textAlign: "center" }}>Второй блок</p>
      </div>
    </>
  );
};

export default FramerPage;
