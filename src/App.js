import React from "react";
import "./App.scss";
import { HashRouter, Route } from "react-router-dom";
import { Main } from "./components/Main";
import { About } from "./components/About";
import { Bulletin } from "./components/Bulletin";
import { Contact } from "./components/Contact";
import { Recruitment } from "./components/Recruitment";
import { JobOffers } from "./components/JobOffers";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={About} />
        <Route exact path="/bulletin" component={Bulletin} />
        <Route exact path="/recruitment" component={Recruitment} />
        <Route exact path="/contact" component={Contact} />
        <Route
          exact
          path="/recruitment/welders"
          render={props => <JobOffers {...props} header="Spawacz" />}/>
        <Route
          exact
          path="/recruitment/assemblers"
          render={props => <JobOffers {...props} header="Monter" />}/>
        <Route
          exact
          path="/recruitment/overhead-crane-operators"
          render={props => <JobOffers {...props} header={"Operator suwnicy"} />}/>
        <Route
          exact
          path="/recruitment/forklift-operators"
          render={props => <JobOffers {...props} header="Operator WJO" />}/>
        <Route
          exact
          path="/recruitment/welder-engineers"
          render={props => <JobOffers {...props} header="Inżynier Spawalnik" />}/>
        <Route
          exact
          path="/recruitment/blacksmiths"
          render={props => <JobOffers {...props} header="Kowal" />}/>
      </div>
    </HashRouter>
  );
}

export default App;
