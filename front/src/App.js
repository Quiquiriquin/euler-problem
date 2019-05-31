import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Dashboard from './Dashboard/Dashboard';
import './App.css';
import Loader from './Loader/Loader';

class App extends Component {
  render(){
    return (
      <Router>
          {this.props.isLoading && <Loader /> }
          <Route path="/" exact component={Dashboard} />
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading : state.app.isLoading,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
