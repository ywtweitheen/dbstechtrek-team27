import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import logo from './logo.svg';
import './App.css';


import MainPage from "./pages";
import ProductsPage from "./pages/products";


class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          //switch to multiple paths
          <Route exact path="/" component={MainPage} />
          <Route path="/products" component={ProductsPage} />
        </Switch>
      </Router>);

  }
}

export default App;
