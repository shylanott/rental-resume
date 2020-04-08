import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


export class Success extends Component {
    continue = e => {
        e.preventDefault();
        // PROCESS FORM -- on the backend this is where you would process your form aka send your data to an API on the backend // 
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm User Data" />
                    <h1>Thank you for your submission.</h1>
                    <p>You will get an email with further instructions.</p>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default Success;
