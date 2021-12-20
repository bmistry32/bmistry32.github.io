import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import CV from "./components/Cv/Cv";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load] = useState(true);

  return (
      <Router basename={process.env.PUBLIC_URL}>
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/cv" component={CV} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
