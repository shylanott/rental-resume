import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import Table from './Table';
import Form from './Form';
import './index.css';

import { UserForm } from './components/UserForm';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Confirm from './components/Confirm';


class App extends Component {  
  
  toggleMenu() {
    const app = document.getElementById("app");
    app.classList.toggle("toggle--active");
  };

  toggleHeader() {
    const app = document.getElementById("app");
    app.classList.toggle("btn--header--active");
  };

  closeMenu() {
    const app = document.getElementById("app");
    app.classList.remove("toggle--active");
  };


  render() {
    return (
      <div className="App">
        {this.props.location.pathname !== "/" ? (
          <Header
          {...this.props}
          generateResumeLink={this.generateResumeLink}
          printResume={this.printResume}
          toggleMenu={this.toggleMenu}
          />
        ) : null}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about">
              <About
                {...this.props}
                toggleHeader={this.toggleHeader}
              />
          </Route>
          <UserForm />
          <Route path="/confirm">
            <Confirm
              {...this.props}
            />
          </Route>
          
        </Switch>
      </div>
    );
  }
}

export default App;