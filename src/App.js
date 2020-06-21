import React, { Component } from 'react';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, withRouter } from 'react-router-dom';
import HomePage from './HomePage';
import FourOhFourPage from './FourOhFourPage';

class App extends Component {

  render () {
    return (
      <Switch>
        <Route path='/' component={HomePage}/>
        <Route component={FourOhFourPage}/>
      </Switch>
    )
  }
}

export default withRouter(App);
