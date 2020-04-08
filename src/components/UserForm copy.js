import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Header from "./Header";
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import FormRentalHistory from './FormRentalHistory';
import Confirm from './Confirm';
import Success from './Success';

export class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: '',
        address1: '',
        address2: '',
        dateStart: '',
        dateEnd: '',
        reason: ''
    }

    // Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    // Go back to prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    // Handle fields change
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    toggleMenu() {
        const app = document.getElementById("app");
        app.classList.toggle("toggle--active");
    }
    
    toggleHeader() {
        const app = document.getElementById("app");
        app.classList.toggle("btn--header--active");
    }
    
    
    

    render() {
        const { step } = this.state;
        const { firstName, lastName, email, occupation, city, bio, address1, address2, dateStart, reason } = this.state;
        const values = { firstName, lastName, email, occupation, city, bio, address1, address2, dateStart, reason }
        
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
                                <FormUserDetails 
                                    nextStep={this.nextStep}
                                    handleChange={this.handleChange}
                                    values={values}
                                    toggleHeader={this.toggleHeader}
                                />
                                </Route>
                                <Route path="/FormPersonalDetails">
                                <FormPersonalDetails 
                                    nextStep={this.nextStep}
                                    prevStep={this.prevStep}
                                    handleChange={this.handleChange}
                                    values={values}
                                    toggleHeader={this.toggleHeader}
                                />
                                </Route>
                                <Route path="/rental-history">
                                    <FormRentalHistory 
                                        nextStep={this.nextStep}
                                        prevStep={this.prevStep}
                                        handleChange={this.handleChange}
                                        values={values}
                                        toggleHeader={this.toggleHeader}
                                    />
                                </Route>
                                <Route path="/confirm">
                                    <Confirm 
                                        nextStep={this.nextStep}
                                        prevStep={this.prevStep}
                                        values={values}
                                    />
                                </Route>
                                <Route path="/confirm">
                                    <Success />
                                </Route>
                                
                            </Switch>
                    </div>
                    
                );
            }
        }


export default UserForm;
