import React from "react";
import '../../components/Hero/styles.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-clipped">
        <div className="hero-textbox">
          <h1 className="main-heading">Nguyen</h1>
          <h2 className="sub-heading">Chúng tôi mang đến bạn những sản phẩm liên quan đến cà phê</h2>
          <button className="btn-main mt-2">Tìm hiểu thêm</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
