import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {
    
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <section className="page">
                <div className="page__header">
                    <div className="page__header__container">
                        <h1 className="page__title">Applicant</h1>
                    </div>
                </div> 
                <MuiThemeProvider>
                    <React.Fragment>
                        <AppBar title="Enter User Details" />
                        <TextField
                            hintText="Enter your first name"
                            floatingLabelText="First Name"
                            onChange={handleChange('firstName')}
                            defaultValue={values.firstName}
                        />
                        <br />
                        <TextField
                            hintText="Enter your last name"
                            floatingLabelText="Last Name"
                            onChange={handleChange('lastName')}
                            defaultValue={values.lastName}
                        />
                        <br />
                        <TextField
                            hintText="Enter your email"
                            floatingLabelText="Email"
                            onChange={handleChange('email')}
                            defaultValue={values.email}
                        />
                        <br />                        
                        <RaisedButton
                            label="Continue"
                            primary={true}
                            style={styles.button}
                            onClick={this.continue}
                        />
                    </React.Fragment>
                </MuiThemeProvider>
            </section>
        );
    }
}

const styles = {
    
    button: {
        /* background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', */
        margin: 25,
        /* color: 'white', */
        /* boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)', */
    }
}

export default FormUserDetails;
