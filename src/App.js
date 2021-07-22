import "./App.css";
import React, { useEffect, useState } from "react";
import api from "./API/product";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero/index";
import Products from "./components/Products/Products";
import Card from "./components/Card/Card";
import Checkout from "./components/Checkout";
import ProductDetail from "./components/Products/ProductDetail/index";

function App() {
  const [products, setproducts] = useState([]);
  const [carts, setCarts] = useState([]);
  const [total, setTotal] = useState(0);

  //Get data Product
  const trieveProduct = async () => {
    const response = await api.get("/products");
    return response.data;
  };

  //Get data Cart
  const trieveCart = async () => {
    const response = await api.get("/carts");
    return response.data;
  };
  
  //useEffect data Product
  useEffect(() => {
    const getProducts = async () => {
      const allProduct = await trieveProduct();
      if (allProduct) setproducts(allProduct);
    };
    getProducts();
  }, []);

  //useEffect data Total cart
  useEffect(() => {
    const getTotal = () => {
      const total = carts.reduce((prev, item) => {
        return prev + item.price * item.quantity;
      }, 0);
      setTotal(total);
    };
    getTotal();
  }, [carts]);

  //useEffect data Cart
  useEffect(() => {
    const getCarts = async () => {
      const allCart = await trieveCart();
      if (allCart) setCarts(allCart);
    };
    getCarts();
  }, []);

  // on add to cart
  const onAddToCart = async (product, quantity) => {
    const request = {
      id: product.id,
      title: product.title,
      price: product.price,
      src: product.src,
      quantity: quantity,
    };
    const response = await api.post("/carts", request);
    setCarts([...carts, response.data]);
  };

  // on update to cart
  const handleUpdateToCart = async (cart, quantity) => {
    const request = {
      quantity: quantity,
      title: cart.title,
      src: cart.src,
      price: cart.price,
    };
    const response = await api.put(`/carts/${cart.id}`, request);
    setCarts(
      carts.map((item) => {
        return item.id === cart.id ? { ...response.data } : item;
      })
    );
  };

  // on remove to cart
  const handleRemoveToCart = async (id) => {
    await api.delete(`/carts/${id}`);
    const newProduct = carts.filter((cart) => cart.id !== id);
    setCarts(newProduct);
  };

  return (
    <div className="app">
      <Router>
        <Header carts={carts} />
        <Switch>
          <Route path="/" exact>
            <Hero />
          </Route>

          <Route path="/product" exact>
            <Products products={products} onAddToCart={onAddToCart} />
          </Route>
          <Route path="/cart" exact>
            <Card
              carts={carts}
              handleRemoveToCart={handleRemoveToCart}
              handleUpdateToCart={handleUpdateToCart}
              total={total}
            />
          </Route>

          <Route path="/product/:id" component={ProductDetail} />

          <Route path="/checkout" exact>
            <Checkout />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
