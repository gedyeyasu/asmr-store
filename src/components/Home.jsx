import React from "react";
import bg from "../assets/bg.png";
function Home() {
  return (
    <div className="hero">
      <div class="card bg-dark text-white border-0">
        <img
          src={bg}
          class="card-img"
          alt="Background"
          height="550px"
          width="100%"
        />
        <div class="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container"></div>
          <h5 class="card-title display-3 fw-bolder mb-0">
            New Season Arrivals
          </h5>
          <p class="card-text lead fs-2">Check Out All The Trends</p>
          <p class="card-text">Last updated 3 mins ago</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
