import React from "react";
import "./App.css";

const PersonGreeter = props => {
  return (
    <div className="personBorder">
      <h2>
        Hi My name is {props.name} and I'm {props.age} years old
      </h2>
      <button className="button" onClick={props.clicked}>
        I'm a Button!
      </button>
    </div>
  );
};

export default PersonGreeter;
