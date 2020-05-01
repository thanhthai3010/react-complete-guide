import React, { useEffect, useRef, useContext } from "react";

import classes from "./Cockpit.css";
import AuthContext from "../../context/auth-context";

const Cockpit = (props) => {
  const toogleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    // Can use to call http request ...
    // setTimeout(() => {
    //   alert('Saved data to cloud.')
    // }, 1000);
    toogleBtnRef.current.click();
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] useEffect 2nd");
    // Can use to call http request ...
  });

  // we can call as many useEffect as we want.

  const assignedClasses = [];
  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red); // classes = ["red"]
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold); // classes = ["red", "bold"]
  }
  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button ref={toogleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
      <button onClick={authContext.login}>Login in</button>
    </div>
  );
};

export default React.memo(Cockpit);
