import React from "react";
import bg from "../assets/bg.png";
import Products from "./Products";
function Home() {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img src={bg} className="card-img" alt="Background" height="20px" />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container"></div>
          <h5 className="card-title display-3 fw-bolder mb-0">
            New Season Arrivals
          </h5>
          <p className="card-text lead fs-2">Check Out All The Trends</p>
          <p className="card-text">Last updated 3 mins ago</p>
        </div>
      </div>
      <Products />
    </div>
  );
}

export default Home;
