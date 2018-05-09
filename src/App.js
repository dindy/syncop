import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'

import Header from './components/Header.js'
import CreateSync from './containers/CreateSync.js'
import ListSync from './containers/ListSync.js'

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Header/>
      	<Route path="/create" component={CreateSync}/>
      	<Route exact={true} path="/" component={ListSync}/>
      </div>
    );
  }
}

export default App;
