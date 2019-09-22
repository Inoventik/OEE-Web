import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import "./App.css";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Journal from "./components/Journal";
import About from "./components/About";
import { NotFound } from "./components/Errors";

export default class extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/dashboard" render={() => <div>Dashboard</div>} />
            <Route path="/journal" component={Journal} />
            <Route path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}
