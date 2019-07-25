import React, { Component } from "react";
import AppNavbar from "./components/AppNavbar";
import BootstrapTable from "./components/BootstrapTable";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <BootstrapTable />
      </div>
    );
  }
}

export default App;
