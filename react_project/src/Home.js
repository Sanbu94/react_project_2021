import React, { Component } from "react";
import "./index.css";

//Home page setup.
class Home extends Component {
  render() {
    return (
      <div>
        <h2>HOME</h2>
        <p>Welcome back!</p> <br></br>
        <p>
          Navigate to "TODO" if you want to use the app, or select "Info" for
          general information about the app.
        </p>
      </div>
    );
  }
}

export default Home;
