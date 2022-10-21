import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./main/Home";
import { Projects } from "./projects/Projects";
import { About } from "./about/About";
import { Admin } from "./admin/Admin";
import { colors } from "../helpers/conf";
import { Footer, NavBar } from "../components/static.components";
import { Box } from "@mui/material";

export default function App() {
  return (
    <Router>
      <Box
        style={{
          color: colors.text,
          backgroundColor: colors.background,
        }}
      >
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/admin">
            <Admin />
          </Route>
        </Switch>
        <Footer />
      </Box>
    </Router>
  );
}
