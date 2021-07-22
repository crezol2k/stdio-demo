import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product, onAddToCart }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
      <div className="card">
        <Link
          to={{
            pathname: `/product/${product.id}`,
            state: { product: product },
          }}
          className="nav-link card-body"
        >
          <img src={product.src} className="card-img-top" alt={product.title} />
          <div className="card-content">
            <h5 className="card-title">{product.title} </h5>
            <p className="card-text fw-bold mb-2">Giá: {product.price} VNĐ</p>
          </div>
        </Link>
        <button
          className="btn-main my-4 mx-3"
          onClick={() => onAddToCart(product, 1)}
        >
          Mua ngay
        </button>
      </div>
    </div>
  );
};

export default Product;
