import React, { useState, useEffect } from "react";
import style from "./HeroSection.module.css";
import banner_01 from '../../assets/images/banner_01.jpeg'
import banner_02 from '../../assets/images/banner_02.jpeg'
import banner_03 from '../../assets/images/banner_03.jpeg'
import banner_04 from '../../assets/images/banner_04.jpeg'

const HeroSection = () => {
  const [image, setImage] = useState(0);
  const images = [
    banner_01,
    banner_02,
    banner_03,
    banner_04
  ];

  useEffect(() => {

    const interval = setInterval(() => {
      setImage((item) => (item + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={style.container}>

       <img src={images[image]} alt="img"/>
       </div>
  );
};

export default HeroSection;
