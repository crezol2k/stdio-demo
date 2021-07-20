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
          <div className="card-content mt-2">
            <h5 className="card-title">{product.title} </h5>

            <p className="card-text fw-bold">Giá: {product.price} VNĐ</p>
          </div>
        </Link>
        <button
          className="btn-main mx-3 mt-3 mb-4"
          onClick={() => onAddToCart(product, 1)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
