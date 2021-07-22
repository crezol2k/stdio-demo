import React from "react";
import { Link } from "react-router-dom";
import "../../components/Hero/styles.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-clipped">
        <div className="hero-textbox">
          <h1 className="main-heading">Nguyen</h1>
          <h2 className="sub-heading">
            Chúng tôi mang đến bạn những sản phẩm liên quan đến cà phê
          </h2>
          <Link to="/product">
            <button className="btn-main uppercase">Tìm hiểu thêm</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
