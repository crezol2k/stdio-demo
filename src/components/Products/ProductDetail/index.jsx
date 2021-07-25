import React from "react";
import { Link } from "react-router-dom";
import "../../Products/ProductDetail/style.css";

const ProductDetail = (props) => {
  console.log(props);
  const product = props.location.state.product;
  return (
    <div className="container">
      <div className="detail">
        <div className="img-detail">
          <div className="img-show">
            <img src={product.src} alt={product.title} className="img-detail" />
          </div>
          <div className="img-select">
            <img src={product.src} alt={product.title} />
            <img src={product.src} alt={product.title} />
            <img src={product.src} alt={product.title} />
            <img src={product.src} alt={product.title} />
          </div>
        </div>

        <div className="box-detail">
          <div className="row">
            <h2>{product.title}</h2>
            <h6>#id: {product.id}</h6>
          </div>
          <h5>${product.price}</h5>
          <p>description</p>
          <p>content</p>
          <p>sold</p>
          <div className="mt-5">
            <Link to="/">
              <button className="btn-main">Mua ngay</button>
            </Link>
            <Link to="/product">
              <button className="btn-main mx-4">Trở lại</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
