import React, { Component } from "react";
import "./Home.css";
import Services from "../../HomePage/Services/Services";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>this is home</h1>
        <Services></Services>
      </div>
    );
  }
}

export default Home;
