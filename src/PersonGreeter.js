import React from "react";
import "./App.css";
import PropTypes from "prop-types";

const PersonGreeter = props => {
  return (
    <div className="personBorder">
      <h2>
        Hi My name is {props.name} and I'm {props.age} years old
      </h2>
      <button className="button" onClick={props.clicked}>
        Remove!
      </button>
    </div>
  );
};

PersonGreeter.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  clicked: PropTypes.func
};

export default PersonGreeter;
