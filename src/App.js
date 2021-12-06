import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import CreatePastry from './components/CreatePastry';
import ShowPastryList from './components/ShowPastryList';
import ShowPastryDetails from './components/ShowPastryDetails';
import UpdatePastryInfo from './components/UpdatePastryInfo';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={ShowPastryList} />
          <Route path='/create-pastry' component={CreatePastry} />
          <Route path='/edit-pastry/:id' component={UpdatePastryInfo} />
          <Route path='/show-pastry/:id' component={ShowPastryDetails} />
        </div>
      </Router>
    );
  }
}

export default App;