import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';

export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

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
                        <AppBar title="Enter Personal Details" />
                        <TextField
                            hintText="Enter your occupation"
                            floatingLabelText="Occupation"
                            onChange={handleChange('occupation')}
                            defaultValue={values.occupation}
                        />
                        <br />
                        <TextField
                            hintText="Enter your city"
                            floatingLabelText="City"
                            onChange={handleChange('city')}
                            defaultValue={values.city}
                        />
                        <br />
                        <TextField
                            hintText="Enter your bio"
                            floatingLabelText="Bio"
                            onChange={handleChange('bio')}
                            defaultValue={values.bio}
                        />
                        <br />
                        <RaisedButton 
                            label="Continue"
                            primary={true}
                            style={styles.button}
                            onClick={this.continue}
                        /> 
                        { /* <Link to="/rental-history" title="Rental History" type="button" onClick={this.continue}>
                        Continue...
                        </Link> */}
                        <RaisedButton 
                            label="Back"
                            primary={false}
                            style={styles.button}
                            onClick={this.back}
                        />
                    </React.Fragment>
                </MuiThemeProvider>
            </section>
        );
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default FormPersonalDetails;
