import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import UserRegister from './Components/Users/UserRegister';
import ImcRegister from './Components/Imc/ImcRegister';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={UserRegister}  exact/>
                <Route path="/userDetaills/:id" component={ImcRegister}  exact/>
            </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
