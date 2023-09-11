import React, { useState } from "react";
import style from "./Product.module.css";
import HeroSection2 from "../../commonUI/herosection2/HeroSection2";
import { BsSearch } from "react-icons/bs";
import products from "../../assets/data/products";
import Productlist from "../../components/productlist/ProductList";

const Product = () => {
  const [product, setProduct] = useState(products);

  const handlefilterdata = (e) => {
    const value = e.target.value;
    if (value === "fruits") {
      const filteredProduct = products.filter(
        (item) => item.category === "fruits"
      );
      setProduct(filteredProduct);
    }
    if (value === "vegetables") {
      const filteredProduct = products.filter(
        (item) => item.category === "vegetables"
      );
      setProduct(filteredProduct);
    }
    if (value === "rice") {
      const filteredProduct = products.filter(
        (item) => item.category === "rice"
      );
      setProduct(filteredProduct);
    }
    if (value === "flour") {
      const filteredProduct = products.filter(
        (item) => item.category === "flour"
      );
      setProduct(filteredProduct);
    }
    if (value === "detergents") {
      const filteredProduct = products.filter(
        (item) => item.category === "detergents"
      );
      setProduct(filteredProduct);
    }
    if (value === "shampoo") {
      const filteredProduct = products.filter(
        (item) => item.category === "shampoo"
      );
      setProduct(filteredProduct);
    }
  };

  const handleSearchData = (e) => {
    const value = e.target.value;
    const SearchProduct = products.filter((item) =>
      item.productName.toLowerCase().includes(value.toLowerCase())
    );
    setProduct(SearchProduct);
  };

  return (
    <div className={style.product_section}>
      <HeroSection2 title="products" />

      <div className={style.product_features}>
        <div className={style.product_filter}>
          <select onChange={handlefilterdata}>
            <option value="all">Filtered by category</option>
            <option value="fruits">Fruits</option>
            <option value="vegetables">Vegitables</option>
            <option value="rice">Rice</option>
            <option value="flour">Flour/atta</option>
            <option value="detergents">Detergents</option>
            <option value="shampoo">Shampoo</option>
          </select>
        </div>
        <div className={style.product_search}>
          <input
            type="text"
            placeholder="Search..."
            onChange={handleSearchData}
          />
          <div className={style.search_icon}>
            <BsSearch />
          </div>
        </div>
      </div>

      <div className={style.all_product}>
        {product.length > 0 ? (
          <Productlist data={product} />
        ) : (
          <h1 style={{color:"red" ,textAlign:"center",marginTop:"2rem"}}>No product found</h1>
        )}
      </div>
    </div>
  );
};

export default Product;
