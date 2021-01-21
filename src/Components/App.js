import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import Adopt from "../Pages/Adopt";
import About from "../Pages/About";
import Confirm from "../Pages/Confirm";
import Header from "./Header";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <header>
          <Header />
        </header>
        <Switch>
          <Route exact path={"/"} component={LandingPage} />
          <Route path={"/about"} component={About} />
          <Route path={"/adopt"} component={Adopt} />
          <Route path={"/confirmation"} component={Confirm} />
        </Switch>
        <footer className="footer"></footer>
      </div>
    );
  }
}

export default App;
