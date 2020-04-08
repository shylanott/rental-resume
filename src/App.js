import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import Table from './Table';
import './index.css';
import Form from './Form';

import { UserForm } from './components/UserForm';


class App extends Component {
  render() {
    return (
      <div className="App">
        <UserForm />
      </div>
    );
  }
}

export default App;