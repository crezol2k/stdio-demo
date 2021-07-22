import React from "react";
import "../../components/FilterProduct/style.css";

const Filter = ({ categories, handleFilter }) => {
  return (
    <div className="category">
      <div className="category-header">
        <span>Danh mục</span>
      </div>
      <div className="select">
        <select
          name="format"
          id="format"
          value={categories}
          onChange={(e) => handleFilter(e.target.value)}
        >
          <option value="-1">Tất cả</option>
          <option value="1">Cà phê bột</option>
          <option value="2">Cà phê hạt</option>
          <option value="3">Máy pha cà phê</option>
          <option value="4">Sản phẩm khác</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
