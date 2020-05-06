import React, { Component } from "react";

import { CardList } from "./components/card-list/card-list";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  async componentWillMount() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users/");
    response = await response.json();
    this.setState({ monsters: response });
    console.log(response);
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <input
          type="search"
          placeholder="search monsters"
          onChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
