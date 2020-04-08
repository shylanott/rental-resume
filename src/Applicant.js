import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import Form from "./Form";

class Applicant extends Component {
    initialState = {
        name: '',
        job: '',
        phone: '',
    }

    state = this.initialState
    
    handleChange = event => {
        const { name, value } = event.target
    
        this.setState({
        [name]: value,
        })
    }

    renderPerson = (name, job, phone, index) => {
        const { onChange } = this.props;
        return (
            <li key={index}>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={this.handleChange} />
                <label htmlFor="job">Job</label>
                <input
                    type="text"
                    name="job"
                    id="job"
                    value={job}
                    onChange={this.handleChange} />
                <label htmlFor="phone">Phone</label>
                <input
                    type="text"
                    name="phone"
                    id="phone"
                    value={phone}
                    onChange={this.handleChange} />                    
            </li>
        )
    }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
      }

    render() {
        const { name, job, phone } = this.state;
        return (
            <section className="page">
                <div className="page__header">
                    <div className="page__header__container">
                        <h1 className="page__title">Applicant</h1>
                    </div>
                </div> 
                <form id="contact" className="fieldset fieldset--contact">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={this.handleChange} />
                    <label htmlFor="job">Job</label>
                    <input
                        type="text"
                        name="job"
                        id="job"
                        value={job}
                        onChange={this.handleChange} />
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="text"
                        name="phone"
                        id="phone"
                        value={phone}
                        onChange={this.handleChange} />
                    <Link to="/rental-history" title="Rental History" type="button">
                        Continue...
                    </Link>
                </form>               
            </section>
        );
      }
}

Applicant.propTypes = {
    people: PropTypes.array,
    onInputChange: PropTypes.func,
    onAddSection: PropTypes.func,
    onRemoveSection: PropTypes.func,
    toggleHeader: PropTypes.func
};

export default Applicant;