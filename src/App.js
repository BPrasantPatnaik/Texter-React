import "./App.css";
import React, { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import Foot from "./components/Foot";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

var name = "Texter";

function App() {
  var [mode, setMode] = useState("light");

  var togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#191970";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>

      {/* <About /> */}

      <Router>
      <Navbar title={name} about="About" mode={mode} />
        <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/">
            <TextArea mode={mode} Text="Text" />
          </Route>
        </Switch>
      <Foot mode={mode} togglemode={togglemode} />
      </Router>
    </>
  );
}

export default App;
