import React, { useState } from "react";
import "../../components/Products/Product/style.css";
import Product from "../../components/Products/Product/Product";
import Pagination from "../Pagination";
import Filter from "../FilterProduct/Filter";

const Products = ({ products, onAddToCart }) => {
  const [filter, setFilter] = useState("");

  const handleFilter = (name) => {
    setFilter(name);
  };

  return (
    <div className="menu">
      <h4 className="main-heading text-center m-3">Menu</h4>
      <div className="container">
        <div className="row">
          <div className=" col-lg-2 col-md-3 col-sm-12">
            <Filter handleFilter={handleFilter} />
          </div>
          <div className="col-lg-10 col-md-9 col-sm-12">
            <div className="row mt-3 px-2">
              {products
                .filter((product) => {
                  if (filter === "-1") {
                    return product;
                  } else if (product.type.includes(filter)) {
                    return product;
                  }
                })
                .map((product) => (
                  <Product
                    product={product}
                    key={product.id}
                    onAddToCart={onAddToCart}
                  />
                ))}
            </div>
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
