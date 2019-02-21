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
    console.log(this.state.clicked);
    return (
      <div>
        <h1 className="app_heading">Welcome to Person Greeter!</h1>
        {this.mapThroughPersonsArray()}
      </div>
    );
  }
}

export default App;
