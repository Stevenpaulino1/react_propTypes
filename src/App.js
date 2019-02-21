import React, { Component } from "react";
import PersonGreeter from "./PersonGreeter";

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Steven", age: 27 },
      { id: 2, name: "John", age: 2 },
      { id: 3, name: "Smith", age: 8 }
    ],
    clicked: false
  };

  clickHandler = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  mapThroughPersonsArray = () => {
    return this.state.persons.map(person => (
      <PersonGreeter
        key={person.id}
        person={person}
        clicked={this.clickHandler}
      />
    ));
  };

  render() {
    return (
      <div className="app_heading">
        <h1>Welcome to Person Greeter!</h1>
        <button className="showButton" onClick={this.clickHandler}>
          Show Persons
        </button>
        {this.state.clicked && this.mapThroughPersonsArray()}
      </div>
    );
  }
}

export default App;
