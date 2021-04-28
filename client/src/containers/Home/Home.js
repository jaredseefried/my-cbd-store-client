import React from "react";
import "./Home.css";
import RandomProducts from '../../components/RandomProducts/RandomProducts'
import RandomEdibles from "../../components/RandomEdibles/RandomEdibles";
import RandomTinctures from "../../components/RandomTinctures/RandomTinctures";
import RandomConcentrates from "../../components/RandomConcentrates/RandomConcentrates";


export default function Home() {
  return (
    <div className="Home">
      <div className="lander">
        <h1>My CBD Corner Store</h1>
        <p className="text-muted p-home">All the CBD products you need!</p>
        <RandomProducts className='Catalog-list' />
        <RandomTinctures />
        <RandomEdibles />
        <RandomConcentrates />
      </div>
    </div>
  );
}