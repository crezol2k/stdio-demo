import React from "react";
import { Link } from "react-router-dom";
import "../../components/FilterProduct/style.css";

const Filter = ({ handleFilter }) => {
  return (
    <div className="category">
      <div className="category-header">
        <span>Danh mục</span>
      </div>
      <div className="category-list">
        <Link
          to="/product"
          onClick={() => handleFilter("-1")}
          className="category-item active"
        >
          Tất cả
        </Link>
        <Link
          to="/product"
          onClick={() => handleFilter("1")}
          className="category-item"
        >
          Cà phê bột
        </Link>
        <Link
          to="/product"
          onClick={() => handleFilter("2")}
          className="category-item"
        >
          Cà phê hạt
        </Link>
        <Link
          to="/product"
          onClick={() => handleFilter("3")}
          className="category-item"
        >
          Máy pha cà phê
        </Link>
        <Link
          to="/product"
          onClick={() => handleFilter("4")}
          className="category-item"
        >
          Sản phẩm khác
        </Link>
      </div>
    </div>
  );
};

export default Filter;
