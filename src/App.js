import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Button } from "reactstrap";
import Header from "./components/layout/Header";
import AddNewAssignment from "./components/layout/AddNewAssignment";

import "bootstrap/dist/css/bootstrap.css";

import Terminals from "./pages/Terminals";
import NewTerminal from "./pages/NewTerminal";
import CentralStations from "./pages/CentralStations";
import Reports from "./pages/Reports";

import ErrorPage from "./pages/ErrorPage.js";

import { Provider } from "react-redux";
import store from "./store";

import "react-table/react-table.css";

import "./App.css";
import NewCompany from "./pages/NewCompany";
import EditCompany from "./pages/EditCompany";
import EditTerminal from "./pages/EditTerminal";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Terminals} />
          <Route exact path="/terminal/new" component={NewTerminal} />
          <Route exact path="/terminal/edit/:id" component={EditTerminal} />

          <Route exact path="/centralstations" component={CentralStations} />
          <Route exact path="/company/new" component={NewCompany} />
          <Route exact path="/company/edit/:id" component={EditCompany} />

          <Route exact path="/reports" component={Reports} />

          <Route component={ErrorPage} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
