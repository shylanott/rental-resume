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
            <section className="page">
                <div className="page__header">
                    <div className="page__header__container">
                        <h1 className="page__title">Success</h1>
                    </div>
                </div> 
                <MuiThemeProvider>
                    <React.Fragment>
                        {/* <AppBar title="Confirm User Data" /> */}
                        <h1>Thank you for your submission.</h1>
                        {/* <p>You will get an email with further instructions.</p> */}
                    </React.Fragment>
                </MuiThemeProvider>
            </section>
        );
    }
}

export default Success;
