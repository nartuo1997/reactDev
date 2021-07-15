import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Login from "./Component/Login/Login";
import Personinfo from "./Component/Person/Personinfo";
import Router from "./Container/Router";
import { BrowserRouter } from "react-router-dom";

class App extends React.Component {
  state = {
    persons: [
      { id: 1, name: "test1", title: "MERN stack" },
      { id: 2, name: "test2", title: "MEAN stack" },
    ],
    showperson: false,
    clicktime: 0,
  };

  changename = () => {
    this.setState({
      persons: [
        { id: 1, name: "Khang", title: "title" },
        { id: 2, name: "test2", title: "MEAN stack" },
      ],
    });
  };

  onClick = () => {
    console.log("Button is clicked");
    this.setState({
      persons: [
        { id: 1, name: "Alex", title: "new title" },
        { id: 2, name: "test2", title: "MEAN stack" },
      ],
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {/* <h1>Welcome to my page</h1> */}
          <div>
            <Router />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
