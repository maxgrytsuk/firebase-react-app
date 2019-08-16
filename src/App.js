import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import AddSettlement from './components/settlements/AddSettlement';
import SettlementDetails from './components/settlements/SettlementDetails';
import SettlementMap from './components/map/SettlementMap'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/dashboard'component={Dashboard} />
            <Route exact path='/'component={SettlementMap} />
            <Route path='/settlement/:id' component={SettlementDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/add' component={AddSettlement} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;