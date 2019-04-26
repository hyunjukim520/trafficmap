import React, { Component } from "react";
import { Container } from "reactstrap";
import Header from "./components/Header";
import Map from "./components/Map";
import "./App.css";
require("dotenv").config();

class App extends Component {
  state = {
    applicationName: "TrafficMaps"
  };
  render() {
    return (
      <div className="App">
        <Header appName={this.state.applicationName} />
        <Container>
          <Map />
        </Container>
      </div>
    );
  }
}

export default App;
