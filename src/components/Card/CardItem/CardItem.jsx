import React from "react";
import "../../Card/CardItem/style.css";
import { Link } from "react-router-dom";

const CardItem = ({ cart, handleRemoveToCart, handleUpdateToCart }) => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-6">
      <div className="card">
        <img src={cart.src} className="card-img-top" alt={cart.title} />
        <div className="card-body">
          <h5 className="card-title fw-bold">{cart.title} </h5>
          <div className="card-action mt-3 mb-4">
            <button
              className="btn-quantity fw-bold"
              type="button"
              onClick={() =>
                handleUpdateToCart(
                  cart,
                  cart.quantity > 1 ? cart.quantity - 1 : (cart.quantity = 1)
                )
              }
            >
              -
            </button>
            <div className="card-text border fw-bold"> {cart.quantity} </div>
            <button
              className="btn-quantity fw-bold"
              type="button"
              onClick={() => handleUpdateToCart(cart, cart.quantity + 1)}
            >
              +
            </button>
          </div>
          <h5 className="card-title fw-bold">Giá: {cart.price} VND </h5>

          <button
            className="btn btn-danger mt-4"
            onClick={() => handleRemoveToCart(cart.id)}
          >
            Xóa
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
