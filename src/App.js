import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import MainHome from "./Components/Pages/Home/MainHome";
import Navbar from "./Components/Pages/Navbar";
import MainPopuler from "./Components/Pages/Populer/MainPopuler";

function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Switch>
          <Route path="/populer">
            <MainPopuler />
          </Route>

          <Route path="/">
            <MainHome />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
