import React, { Component } from "react";

import classes from "./Person.css";
import AuthContext from "../../../context/auth-context";

class Person extends Component {
  static contextType = AuthContext;

  componentDidMount() {
    console.log(this.context.authenticated);
  }

  render() {
    console.log("[Person.js] rendering...");
    return (
      <div className={classes.Person}>
        {this.context.authenticated ? (
          <p>Authenticated!</p>
        ) : (
          <p>Please log in!</p>
        )}
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    );
  }
}

export default Person;
