import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import Table from './Table';
import './index.css';
import Form from './Form';

import Home from './Home';
import Header from './Header';
import About from './About';
import Applicant from './Applicant';
import RentalHistory from './RentalHistory';
import Preview from "./Preview";


class App extends Component {
  state = {
    characters: [
      {
        name: "",
        email: "",
        phone: ""
      }
    ],
    rentalHistory: [
      {
        address1: "",
        address2: "",
        city: "",
        state: "",
        zip: "",
        dateStart: "",
        dateEnd: "",
        reason: ""
      }
    ]
  }; 

  removeCharacter = index => {
    const { characters } = this.state

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }

  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character] })
  }

  printResume = () => {
    const app = document.getElementById("app");
    if (this.props.location.pathname !== "/preview") {
      this.context.router.push("/preview");
      setTimeout(() => {
        app.classList.remove("toggle--active");
        window.print();
      }, 500);
    } else {
      app.classList.remove("toggle--active");
      window.print();
    }
  }

  render() {
    const { characters } = this.state
    return (
      <div>
        {this.props.location.pathname !== "/" ? (
          <Header
          {...this.props}
          generateResumeLink={this.generateResumeLink}
          printResume={this.printResume}
          toggleMenu={this.toggleMenu}
          closeMenu={this.closeMenu}
          />
        ) : null}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about">
            <About
              {...this.props}
              toggleHeader={this.toggleHeader}
              closeMenu={this.closeMenu}
            />
          </Route>
          <Route path="/applicant">
            <Applicant
              {...this.props}
              people={this.state.people}
              onInputChange={this.onInputChange}
              onAddSection={this.onAddSection}
              onRemoveSection={this.onRemoveSection}
              toggleHeader={this.toggleHeader}
            />
          </Route>
          <Route path="/rental-history">
            <RentalHistory
              {...this.props}
              rentalHistory={this.state.rentalHistory}
              onInputChange={this.onInputChange}
              onAddSection={this.onAddSection}
              onRemoveSection={this.onRemoveSection}
              toggleHeader={this.toggleHeader}
            />
          </Route>
          <Route path="/preview">
            <Preview
              {...this.props}
              people={this.state.people}
              summary={this.state.summary}
              rentalHistory={this.state.rentalHistory}
              employmentHistory={this.state.employmentHistory}
              income={this.state.income}
              toggleHeader={this.toggleHeader}
              printResume={this.printResume}
            />
          </Route>
            <Table characterData={characters} removeCharacter={this.removeCharacter} />
            <Form handleSubmit={this.handleSubmit} />
        </Switch>
      </div>
    );
    }
  }

export default App;