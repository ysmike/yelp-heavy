import React, { Component } from "react";
import DataTable from "./components/DataTable";

import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    restaurants: []
  };

  async componentDidMount() {
    const response = await axios.get("/api/restaurants");
    this.setState({ restaurants: response.data });
  }

  render() {
    return (
      <div className="App">
        <DataTable restaurants={this.state.restaurants} />
      </div>
    );
  }
}

export default App;
