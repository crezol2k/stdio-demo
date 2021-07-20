import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import "../../components/Header/style.css";

const Header = ({ carts }) => {
  const totalQuantity = carts.reduce((prev, item) => {
    return prev += item.quantity
  }, 0)

  const [click, setClick] = useState(true);
  const onClick = () => setClick(!click);
  return (
    <header className="container-fluid">
      <div className="nav-left">
        <Link className="menuToggle" onClick={onClick}>
          {click ? <Icon.List className="icon-list" /> : <Icon.X />}
          <div
            className={click ? "nav-mobile" : "nav-mobile active"}
            onClick={onClick}
          >
            <Link to="/" className="nav-link-mobile">
              <Icon.House className="nav-link-mobile__icon" />
              Trang chủ
            </Link>
            <Link to="/product" className="nav-link-mobile">
              <Icon.CardText className="nav-link-mobile__icon" />
              Sản phẩm
            </Link>
            <Link className="nav-link-mobile">
              <Icon.Envelope className="nav-link-mobile__icon" />
              Liên hệ
            </Link>
          </div>
        </Link>

        <Link to="/" className="nav-link nav-logo">
          Nguyen
        </Link>
      </div>
      <div className="nav-right">
        <div className="main-menu">
          <Link to="/product" className="nav-link">
            Sản phẩm
          </Link>
          <Link className="nav-link">Liên hệ</Link>
        </div>

        <Link to="/cart" className="nav-link cart-menu">
          <Icon.Cart2 className="cart-menu-icon" />
          <p className="sub-items">{totalQuantity}</p>
        </Link>
      </div>
    </header>
  );
};

export default Header;
