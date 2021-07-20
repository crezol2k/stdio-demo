import React from "react";
import { Link } from "react-router-dom";
import "../../components/Checkout/style.css"

const Checkout = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center checkout">
      <h2 className="fw-bold uppercase m-5">Check out</h2>
      <Link to='/product'>
        <button className="btn btn-dark">Back</button>
      </Link>
    </div>
  );
};

export default Checkout;
