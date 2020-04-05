import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Ste", age: 26 }
    ]
  });

  const switchNameHandler = newName => {
    setPersonsState({
      persons: [
        { name: newName, age: 24448 },
        { name: "Manu", age: 29 },
        { name: "Ste", age: 26 }
      ]
    });
  };

  const nameChangedHandler = event => {
    setPersonsState({
      persons: [
        { name: "Max", age: 24448 },
        { name: event.target.value, age: 29 },
        { name: "Ste", age: 26 }
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <button onClick={() => switchNameHandler("Button Click name")}>
        Switch Name
      </button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
        click={() => switchNameHandler("NewNameValue")}
        changed={nameChangedHandler}
      >
        My hobbies: can click to change
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
};

export default app;
