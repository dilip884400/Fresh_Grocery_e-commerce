import React, { useState } from "react";
import style from "./Navbar.module.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { FaHome } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [mobileView, setMobileView] = useState(false);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const navigate = useNavigate();
  const isLogin = localStorage.getItem("logged");
  const userdetails = JSON.parse(localStorage.getItem("users")) || [];

  const menuItems = [
    {
      icon: <FaHome />,
      path: "/",
      display: "Home",
    },
    {
      icon: <MdProductionQuantityLimits />,
      path: "/product",
      display: "Product",
    },
    {
      icon: <FaShoppingCart />,
      path: "/cart",
      display: "Cart",
    },
  ];

  function handleLogout() {
    const isLoggedIn = userdetails.find(
      (user) => user.subscriptionData.isActive === true
    );

    if (isLoggedIn) {
      isLoggedIn.subscriptionData.isActive = false;
      localStorage.setItem("users", JSON.stringify(userdetails));
      localStorage.removeItem("logged");
      navigate("/login");
    } else {
      navigate("/login");
    }
  }

  return (
    <div className={style.navbar}>
      <NavLink to="/">
        <div className={style.logo}>
          <img
            src="https://www.chowbus.com/services/service-type-grocery.png"
            alt="logoImg"
          />
          <h1>Fresh Grocery</h1>
        </div>
      </NavLink>

      <div
        className={mobileView ? style.responsive : style.nav_menu}
        onClick={() => setMobileView(false)}
      >
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            style={({ isActive }) => ({
              fontWeight: isActive ? "700" : "600",
              color: isActive ? "lightgreen" : "#19a319",
            })}
            to={item.path}
          >
            <span className={style.nav_icons}>{item.icon}</span>
            {item.display}
          </NavLink>
        ))}
      </div>
      <div className={style.user}>
        <div className={style.cart_icons} onClick={() => navigate("/cart")}>
          <TiShoppingCart />
          <span>{totalQuantity}</span>
        </div>
        {isLogin ? (
          <Link to="/login">
            <button className={style.logout_btn} onClick={handleLogout}>
              Logout
            </button>
          </Link>
        ) : (
          <NavLink to="/login">
            <motion.img
              whileTap={{ scale: 1.2 }}
              className={style.profile}
              src="https://www.freepngimg.com/thumb/facebook/62681-flat-icons-face-computer-design-avatar-icon.png"
              alt="profile"
            />
          </NavLink>
        )}
        <button
          className={style.hamburger}
          onClick={() => setMobileView(!mobileView)}
        >
          {mobileView ? <ImCross /> : <FaBars />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
