import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Confirm extends Component {
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
        const { values: { firstName, lastName, email, occupation, city, bio, address1, address2, dateStart, dateEnd, reason } } = this.props;
        return (
            <section className="page">
                <div className="resume">
                    <div className="resume__container">
                        <header className="resume__header">
                        
                        <h1 className="resume__title">Rental Resume</h1>
                        </header>
                                   
                
                <MuiThemeProvider>
                    <React.Fragment>
                        {/* <AppBar title="Confirm User Data" /> */}
                        <div>
                            <h2 className="resume__subtitle">User Details</h2>
                        </div>
                        <List>
                            <ListItem 
                                primaryText="First Name"
                                secondaryText={ firstName }
                            />
                            <ListItem 
                                primaryText="Last Name"
                                secondaryText={ lastName }
                            />
                            <ListItem 
                                primaryText="Email"
                                secondaryText={ email }
                            />
                            <div>
                                <h2 className="resume__subtitle">Personal Details</h2>
                            </div>
                            <ListItem 
                                primaryText="Occupation"
                                secondaryText={ occupation }
                            />
                            <ListItem 
                                primaryText="City"
                                secondaryText={ city }
                            />
                            <ListItem 
                                primaryText="Bio"
                                secondaryText={ bio }
                            />
                            <div>
                                <h2 className="resume__subtitle">Rental History</h2>
                                    <ul className="rental-list">
                                    <ListItem 
                                        primaryText="Street Address"
                                        secondaryText={ address1 }
                                    />
                                    <ListItem 
                                        primaryText="Address 2"
                                        secondaryText={ address2 }
                                    />
                                    <ListItem 
                                        primaryText="Date Start"
                                        secondaryText={ dateStart }
                                    />
                                    <ListItem 
                                        primaryText="Date End"
                                        secondaryText={ dateEnd }
                                    />
                                    <ListItem 
                                        primaryText="Reason For Leaving"
                                        secondaryText={ reason }
                                    />
                                    </ul>
                                </div>
                        </List>
                        <br />
                        <RaisedButton 
                            label="Confirm & Continue"
                            primary={true}
                            style={styles.button}
                            onClick={this.continue}
                        />
                        <RaisedButton 
                            label="Back"
                            primary={false}
                            style={styles.button}
                            onClick={this.back}
                        />
                    </React.Fragment>
                </MuiThemeProvider>
                </div>
                </div>
            </section>
        );
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default Confirm;
