import React from "react";
import "../../components/Products/Product/style.css";
import { Link } from "react-router-dom";
import Product from "../../components/Products/Product/Product";
import Pagination from "../Pagination";

const Products = ({ products, onAddToCart }) => {
  return (
    <div className="menu">
      <h4 className="main-heading text-center m-3">Menu</h4>
      <div className="container">
        <div className="row">
          <div className=" col-lg-2 col-md-3 col-sm-12">
            <div className="category">
              <div className="category-header">
                <span>Danh mục</span>
              </div>
              <div className="category-list">
                <Link className="category-item active">Tất cả</Link>
                <Link className="category-item">Cà phê bột</Link>
                <Link className="category-item">Cà phê hạt</Link>
                <Link className="category-item">Máy pha cà phê</Link>
                <Link className="category-item">Sản phẩm khác</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-10 col-md-9 col-sm-12">
            <div className="row mt-3 px-2">
              {products.map((product) => (
                <Product product={product} key={product.id} onAddToCart={onAddToCart} />
              ))}
            </div>
            <Pagination/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
