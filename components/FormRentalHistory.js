import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import classNames from "classnames";
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';


export class FormRentalHistory extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values, handleChange, toggleHeader } = this.props;
        const selectClassNames = classNames({
          select: true,
          "select--state": true,
        });
        return (
          <section className="page">
            <div className="page__header">
              <div className="page__header__container">
                <h1 className="page__title">Rental History</h1>
                <p className="page__subtitle">
                  Now let's outline a history of your recent places of residence.
                  This doesn't have to be extensive but be sure to include at least
                  two or three.
                </p>
                {/* <button className="btn--header" onClick={toggleHeader}>
                  <span /> 
                </button> */}
              </div>
            </div> 
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter Rental History Details" />
                    
                    <li id="rent" className="fieldset fieldset--rent">
                      <input
                        className="input input--street"
                        name="address-line1"
                        autoComplete="shipping address-line1"
                        placeholder="Street Address*"
                        type="text"
                        onChange={handleChange('address1')}
                        value={values.address1}
                      />
                      <input
                        className="input input--apartment"
                        name="address-line2"
                        autoComplete="shipping address-line2"
                        placeholder="Apt #"
                        type="text"
                        onChange={handleChange('address2')}
                        value={values.address2}
                      />
                      <input
                        className="input input--city"
                        name="address-level2"
                        autoComplete="shipping address-level2"
                        placeholder="City*"
                        type="text"
                        onChange={handleChange('city')}
                        value={values.city}
                      />
                      <input
                        className="input input--start-date"
                        name="start-date"
                        placeholder="Move In Date*"
                        type="text"
                        value={values.dateStart}
                        onChange={handleChange('dateStart')}
                        value={values.dateStart}
                      />
                      <input
                        className="input input--end-date"
                        name="end-date"
                        placeholder="Move Out Date*"
                        type="text"
                        onChange={handleChange('dateEnd')}
                        value={values.dateEnd}
                      />
                      <textarea
                        className="textarea textarea--reason"
                        name="leaving-reason"
                        placeholder="Reason For Leaving"
                        type="text"
                        value={values.reason}
                        onChange={handleChange('reason')}
                        value={values.reason}
                      />
                    </li>
                    <br />
                    <RaisedButton 
                        label="Continue"
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
                    {/* <Link to="/confirm" title="Confirm" type="button" onClick={this.continue}>
                      Continue...
                        </Link> */}
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

export default FormRentalHistory;