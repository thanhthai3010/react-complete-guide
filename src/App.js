import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { id: "123", name: "Max", age: 28 },
      { id: "456", name: "Manu", age: 29 },
      { id: "789", name: "Ste", age: 26 },
    ],
  });

  const [showPersons, setShowPersons] = useState(false);

  const togglePersonsHandler = () => {
    setShowPersons(!showPersons);
  };

  const deletePersonHandler = (personIndex) => {
    const newPersons = [...personsState.persons];
    newPersons.splice(personIndex, 1);
    setPersonsState({ persons: newPersons });
  };

  const nameChangedHandler = (event, id) => {
    // Get updating person index
    const personIndex = personsState.persons.findIndex((p) => {
      return p.id === id;
    });

    // Change the name of current person
    const updatedPerson = {
      ...personsState.persons[personIndex],
    };
    updatedPerson.name = event.target.value;

    // Create the new persons list with updated person
    const newPersons = [...personsState.persons];
    newPersons[personIndex] = updatedPerson;

    // Manipulate the state
    setPersonsState({
      persons: newPersons,
    });
  };

  const style = {
    backgroundColor: "green",
    color: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer",
  };

  let persons = null;
  if (showPersons) {
    persons = (
      <div>
        {personsState.persons.map((person, index) => {
          return (
            <Person
              click={() => deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => nameChangedHandler(event, person.id)}
            />
          );
        })}
      </div>
    );

    style.backgroundColor = "red";
  }

  const classes = [];
  if (personsState.persons.length <= 2) {
    classes.push("red"); // classes = ["red"]
  }
  if (personsState.persons.length <= 1) {
    classes.push("bold"); // classes = ["red", "bold"]
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p className={classes.join(" ")}>This is really working!</p>
      <button style={style} onClick={() => togglePersonsHandler()}>
        Toggle Persons
      </button>

      {persons}
    </div>
  );
};

export default App;
