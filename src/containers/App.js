import React, { useState } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

const App = (props) => {
  const [personsState, setPersonsState] = useState([
    { id: "123", name: "Max", age: 28 },
    { id: "456", name: "Manu", age: 29 },
    { id: "789", name: "Ste", age: 26 },
  ]);

  const [showPersons, setShowPersons] = useState(false);

  const togglePersonsHandler = () => {
    setShowPersons(!showPersons);
  };

  const deletePersonHandler = (personIndex) => {
    const newPersons = [...personsState];
    newPersons.splice(personIndex, 1);
    setPersonsState(newPersons);
  };

  const nameChangedHandler = (event, id) => {
    // Get updating person index
    const personIndex = personsState.findIndex((p) => {
      return p.id === id;
    });

    // Change the name of current person
    const updatedPerson = {
      ...personsState[personIndex],
    };
    updatedPerson.name = event.target.value;

    // Create the new persons list with updated person
    const newPersons = [...personsState];
    newPersons[personIndex] = updatedPerson;

    // Manipulate the state
    setPersonsState(newPersons);
  };

  let persons = null;

  if (showPersons) {
    persons = (
      <Persons
        persons={personsState}
        clicked={deletePersonHandler}
        changed={nameChangedHandler}
      />
    );
  }

  return (
    <div className={classes.App}>
      <Cockpit
        title={props.appTitle}
        showPersons={showPersons}
        persons={personsState}
        clicked={togglePersonsHandler}
      />
      {persons}
    </div>
  );
};

export default App;
