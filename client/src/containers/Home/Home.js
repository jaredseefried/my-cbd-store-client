import React from "react";
import "./Home.css";
import ProductList from '../../components/ProductList/ProductList'

export default function Home() {
  return (
    <div className="Home">
      <div className="lander">
        <h1>My CBD Corner Store</h1>
        <p className="text-muted p-home">All the CBD products you need!</p>
        <ProductList />
      </div>
    </div>
  );
}