import React, { useState, useEffect } from "react";
import style from "./Home.module.css";
import HeroSection from "../../components/heroSection/HeroSection";
import Productlist from "../../components/productlist/ProductList";
import products from "../../assets/data/products";
import CountdownTimer from "../../commonUI/countdownTimer/CountdownTimer";

const Home = () => {
  const [fruit, setfruit] = useState([]);
  const [vegitable, setVegitable] = useState([]);
  const [rice, setRice] = useState([]);
  const [flour, setFlour] = useState([]);
  const [detergent, setDetergent] = useState([]);
  const [shampoo, setShampoo] = useState([]);

  useEffect(() => {
    const filterFruits = products.filter((item) => item.category === "fruits");
    setfruit(filterFruits);

    const filterVegeis = products.filter(
      (item) => item.category === "vegetables"
    );
    setVegitable(filterVegeis);

    const filterRice = products.filter((item) => item.category === "rice");
    setRice(filterRice);

    const filterFlour = products.filter((item) => item.category === "flour");
    setFlour(filterFlour);

    const filterDetergent = products.filter(
      (item) => item.category === "detergent"
    );
    setDetergent(filterDetergent);

    const filterShampoo = products.filter(
      (item) => item.category === "shampoo"
    );
    setShampoo(filterShampoo);
  }, []);

  return (
    <div className={style.home}>
      <HeroSection />

      <div className={style.container}>
        <h1 className={style.heading}>
          Fresh fruits
          <hr />
        </h1>
        <div className={style.product_container}>
          <Productlist data={fruit} />
        </div>
      </div>
      <div className={style.container}>
        <h1 className={style.heading}>
          Fresh Vegetable
          <hr />
        </h1>
        <div className={style.product_container}>
          <Productlist data={vegitable} />
        </div>
      </div>
      <div className={style.offer_section}>
        <div className={style.timer}>
        <h1>Limited-time offer - <span>Hurry up!</span></h1>
          <CountdownTimer />
        </div>
        <div className={style.timer_img}>
          <img src="https://toppng.com/uploads/preview/black-friday-november-discount-offer-limited-time-special-offer-11562941584iyevqxqchc.png" />
        </div>
      </div>
      <div className={style.container}>
        <h1 className={style.heading}>
          Rice
          <hr />
        </h1>
        <div className={style.product_container}>
          <Productlist data={rice} />
        </div>
      </div>
      <div className={style.container}>
        <h1 className={style.heading}>
          Flour/atta
          <hr />
        </h1>
        <div className={style.product_container}>
          <Productlist data={flour} />
        </div>
      </div>
      <div className={style.container}>
        <h1 className={style.heading}>
          Detergent
          <hr />
        </h1>
        <div className={style.product_container}>
          <Productlist data={detergent} />
        </div>
      </div>
      <div className={style.container}>
        <h1 className={style.heading}>
          Shampoo
          <hr />
        </h1>
        <div className={style.product_container}>
          <Productlist data={shampoo} />
        </div>
      </div>
    </div>
  );
};

export default Home;
