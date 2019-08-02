import React, { Component } from "react";
import MatTable from "./components/MatTable";
import Logo from "./components/Logo";
import axios from "axios";

class App extends Component {
  state = {
    restaurants: []
  };

  async componentDidMount() {
    const response = await axios.get("/api/restaurants");
    this.setState({ restaurants: response.data });
  }

  // filterToShowAmericanOnly() {
  //   console.log("hello");
  //   const restaurants = this.state.restaurants;
  //   const filtered = restaurants.filter(restaurant => {
  //     if (restaurant.category.includes("Chinese")) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   });
  //   this.setState({ restaurants: filtered });
  // }

  render() {
    return (
      <div className="App">
        <Logo />
        <MatTable restaurants={this.state.restaurants} />
      </div>
    );
  }
}

export default App;
