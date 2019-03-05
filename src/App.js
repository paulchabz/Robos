import React, { Component } from "react";
import CardList from "./CardList";
import Scroll from "./Scroll";
import Error from "./ErrorBoundry";
import SearchBox from "./SearchBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ""
    };
  }
  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response => {
        return response.json();
      })
      .then(users => {
        this.setState({ robots: users });
      });
  }
  onSearchChange = event => {
    //console.log(event.target.value);
    this.setState({ searchField: event.target.value });
  };
  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name
        .toLocaleLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <Error>
            <CardList robots={filteredRobots} />
          </Error>
        </Scroll>
      </div>
    );
  }
}

export default App;
