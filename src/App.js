import React from "react";
import "./styles.css";
import Container from "@material-ui/core/Container";
import { Switch, Route, BrowserRouter } from "react-router-dom";

//import Header from "./components/Header";

import Poland from "./components/Poland";
import World from "./components/World";
import Regions from "./components/Regions";

export default function App() {
  return (
    <div className="App">
      <Container fixed maxWidth="lg">
        <BrowserRouter>
          <Switch>
            <Route path="/world">
              <World />
            </Route>
            <Route path="/regions">
              <Regions />
            </Route>
            <Route path="/">
              <Poland />
            </Route>
          </Switch>
        </BrowserRouter>
      </Container>
    </div>
  );
}
