import { AppStateProvider } from "./store";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";

import "./teleporthq/style.module.css";
import Home from "./teleporthq/pages/home";
import Custom from "./pages/custom";

const App = () => {
  return (
    <Router>
      <NextUIProvider>
        <AppStateProvider>
          <div>
            <Link to="/">Home</Link>
            <Link to="/custom">Demo</Link>
          </div>
          <Route exact component={Home} path="/" />
          <Route exact component={Custom} path="/custom" />
        </AppStateProvider>
      </NextUIProvider>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
