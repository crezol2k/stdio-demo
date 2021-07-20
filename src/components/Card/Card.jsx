import React from "react";
import { Link } from "react-router-dom";
import CardItem from "./CardItem/CardItem";

const Card = ({ carts, total, handleRemoveToCart, handleUpdateToCart }) => {
  const emptyCart = () => {
    return `<h2>Quan lại menu</h2>`;
  };
  return (
    <div className="container mt-15">
      <h4 className="sub-heading mb-4 fw-bold uppercase">Giỏ hàng</h4>
      <div className="container mt-2">
        <div className="row">
          {carts.map((cart) => (
            <CardItem
              cart={cart}
              handleRemoveToCart={handleRemoveToCart}
              handleUpdateToCart={handleUpdateToCart}
              key={cart.id}
            />
          ))}
        </div>
        <div className="mt-5 d-flex justify-content-between">
          <h4 className="fw-bold"> Tổng tiền: {total} VNĐ</h4>
          <div className="">
            <Link to="/checkout">
              <button className="btn btn-success mx-4"> Checkout</button>
            </Link>
            <Link to="/product">
              <button className="btn btn-dark"> Back</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
