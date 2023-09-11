import React from "react";
import style from "./HeroSection2.module.css";

const HeroSection2 = ({ title }) => {
  return (
    <div className={style.bg_img}>
      <div className={style.product_title}>
        <h1>{title}</h1>
      </div>
    </div>
    
  );
};

export default HeroSection2;
