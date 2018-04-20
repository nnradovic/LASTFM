import React, { Component, Fragment } from 'react';
import './App.css';
import Header from './partials/Header';
import Footer from './partials/Footer';
import Main from './main/Main';
import { Router, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <Main/>
          <Footer/>
        </Fragment>
    );
  }
}

export default App;
