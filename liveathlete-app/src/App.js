import React, { Component, Fragment } from "react";
// import logo from './logo.svg';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Interviews from "./components/Interviews";
import Footer from "./components/Footer";
import Admin from "./components/Admin";
import TOS from "./components/Terms";
import PPP from "./components/Privacy";

const App = () => (
  <Router>
    <Fragment>
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/interviews" component={Interviews} />
      <Route exact path="/admin" component={Admin} />
      <Route exact path="/tos" component={TOS} />
      <Route exact path="/privacy" component={PPP} />
      <Footer />
    </Fragment>
  </Router>
);

export default App;
