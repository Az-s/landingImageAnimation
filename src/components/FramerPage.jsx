import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import phoneImage from "../assets/phone2.png";
import coinImage from "../assets/Coins2.png";
import mugImage from "../assets/mugImage.png";
import logos from '../assets/logos.png';
import pai from '../assets/logotype.png';

const FramerPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [background, setBackground] = useState("black");
  const [showNewElements, setShowNewElements] = useState(false);
  const controls = useAnimation();
  const backgroundChangeHeight = 200;
  const [navbarPosition, setNavbarPosition] = useState("sticky");
  const navbarChangeHeight = 300;

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
    if (scrollY >= backgroundChangeHeight) {
      setBackground("white");
      setShowNewElements(true);
    } else {
      setBackground("black");
      setShowNewElements(false);
    }

    if (scrollY >= navbarChangeHeight) {
      setNavbarPosition('relative');
    } else {
      setNavbarPosition('sticky');
    }
  }, [scrollY]);

  useEffect(() => {
    controls.start({ backgroundColor: background });
  }, [background, controls]);

  const opacity = scrollY <= 80 ? 1 : scrollY <= 160 ? 0.53 : 0.02;
  const scale = scrollY <= 80 ? 1 : scrollY <= 160 ? 0.765 : 0.51;
  const scale2 = scrollY <= 80 ? 1 : scrollY <= 160 ? 0.765 : 0.765;

  const containerStyle = {
    // overflow: "auto",
    minHeight: "140vh",
    // position: "relative",
    transition: "background 0.5s ease",
  };

  const imageStyle = {
    opacity: "1",
    width: "100%",
    zIndex: "2",
    padding: "10px",
    position: 'sticky',
    top: '50%'
  };

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
      <motion.div
        style={{ ...containerStyle, backgroundColor: background }}
        animate={{ controls }}
        transition={{ duration: 1 }}
      >
        <div style={{display: 'flex', justifyContent: 'space-between',alignItems: 'center',padding: '0px 16px', position: navbarPosition, top: '16px', zIndex: 3}}>
          <img src={pai} alt="" style={{height: '32px', width: '48px', zIndex: '2'}}/>
          <button type="button" style={{height: '48px', width: '89px', background: '#E9E9E9', borderRadius: '12px', fontWeight: '700', fontSize: '16px', border: 'none', zIndex: '2'}}>
            <a href="ссылка" style={{textDecoration: 'none',  color: 'black'}}>Войти</a>
          </button>
        </div>
        <motion.h1
          style={{
            opacity: opacity,
            scale: scale,
            fontSize: "54px",
            paddingTop: "56px",
            paddingBottom: "32px",
          }}
          animate={{ opacity: opacity, scale: scale }}
          transition={{ duration: 0.5 }}
        >
          Бонусы в касание
        </motion.h1>
        <motion.div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            position: "relative",
            zIndex: '1'
          }}
        >
          <motion.img
            src={mugImage}
            alt="Image 1"
            style={{
              opacity: opacity,
              scale: scale,
              zIndex: "1",
              position: "absolute",
              left: "-70px",
              bottom: "215px",
              width: "280px",
            }}
            animate={{ opacity: opacity, scale: scale }}
            transition={{ duration: 0.1 }}
          />
          <motion.img
            src={phoneImage}
            alt="Image 3"
            style={imageStyle}
            animate={{ scale: scale2 }}
            transition={{ duration: 0.5 }}
          />
          <motion.img
            src={coinImage}
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
        {showNewElements && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{zIndex: '2', position: 'relative', paddingLeft: '16px', paddingRight: '16px'}}
          >
            <h2 style={{color: 'black', fontSize: '36px', fontWeight: '700', margin: '0px'}}>Оплачивай счет и получай бонусы в одно касание</h2>
            <div>
              <img src={logos} alt="Logos" style={{width: '100%', paddingTop: '48px', paddingBottom: '80px'}} />
            </div>
          </motion.div>
        )}
      </motion.div>
      <div style={{ height: "100vh", backgroundColor: "black", color: 'black' }}>
        <p style={{ textAlign: "center" }}>Второй блок</p>
      </div>
    </>
  );
};

export default FramerPage;