import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import { StoreProvider } from "./utils/GlobalState";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <StoreProvider>
          <Nav />
          <Switch>
            <Route exact path={["/", "/search"]}>
              <Search />
            </Route>
            <Route exact path="/saved">
              <Saved />
            </Route>
          </Switch>
        </StoreProvider>
      </div>
    </Router>
  );
}

export default App;
