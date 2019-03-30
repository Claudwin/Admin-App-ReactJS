import React from "react";
import { link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>Admin App</h1>
    <p>Web app</p>
    <Link to="about" className="btn btn-primary btn-lg">
      learn More
    </Link>
  </div>
);

export default HomePage;
