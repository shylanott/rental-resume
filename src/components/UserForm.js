import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
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
        
        switch(step) {
            case 1:
                return (
                    <Route path="/applicant">
                    <FormUserDetails 
                        {...this.props}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                        toggleHeader={this.toggleHeader}
                    />
                    </Route>
                );
            case 2: 
                return (
                    <Route path="/applicant">
                    <FormPersonalDetails 
                        {...this.setState}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                        toggleHeader={this.toggleHeader}
                    />
                    </Route>
                );
            case 3: 
                return (
                    <Route path="/applicant">
                    <FormRentalHistory 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                        toggleHeader={this.toggleHeader}
                    />
                    </Route>
                );
            case 4: 
                return (
                    <Route path="/applicant">
                    <Confirm 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                        people={this.state.people}
                        FormRentalHistory={this.state.rentalHistory}
                        toggleHeader={this.toggleHeader}
                        printResume={this.printResume}
                    />
                    </Route>
                );
            case 5: 
                return <Success />
        }
    }
}

export default UserForm
