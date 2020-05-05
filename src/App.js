import React, { Component } from "react";

import { CardList } from "./components/card-list/card-list.jsx";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
  }

  async componentWillMount() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users/");
    response = await response.json();
    this.setState({ monsters: response });
    console.log(response);
  }
  render() {
    return (
      <div className="App">
        <CardList>
          {this.state.monsters.map((monster) => (
            <h1 key={monster.id}> {monster.name}</h1>
          ))}
        </CardList>
      </div>
    );
  }
}

export default App;
