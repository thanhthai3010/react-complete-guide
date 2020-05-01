import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  state = {
    persons: [
      { id: "123", name: "Max", age: 28 },
      { id: "456", name: "Manu", age: 29 },
      { id: "789", name: "Ste", age: 26 },
    ],
    showPersons: false,
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePersonHandler = (personIndex) => {
    const newPersons = [...this.state.persons];
    newPersons.splice(personIndex, 1);
    this.setState({ persons: newPersons });
  };

  nameChangedHandler = (event, id) => {
    // Get updating person index
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    // Change the name of current person
    const updatedPerson = {
      ...this.state.persons[personIndex],
    };
    updatedPerson.name = event.target.value;

    // Create the new persons list with updated person
    const newPersons = [...this.state.persons];
    newPersons[personIndex] = updatedPerson;

    // Manipulate the state
    this.setState({ persons: newPersons });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
