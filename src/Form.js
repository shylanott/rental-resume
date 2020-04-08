import React, { Component } from "react";

class Form extends Component {
    initialState = {
        name: '',
        job: '',
        phone: '',
        rentalHistory: ''
    }

    state = this.initialState

    handleChange = event => {
        const { name, value } = event.target
    
        this.setState({
        [name]: value,
        })
    }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
      }

    render() {
        const { name, job, phone, rentalHistory } = this.state;
      
        return (
        <section className="page">
          <form>
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
            <label htmlFor="rentalHistory">Rental History</label>
            <input
              id="address-line1"
              className="input input--street"
              name="address-line1"
              autoComplete="shipping address-line1"
              placeholder="Street Address*"
              type="text"
              value={rentalHistory.address1}
              onChange={this.handleChange}
            />
            <input
              id='address-line2'
              className="input input--apartment"
              name="address-line2"
              autoComplete="shipping address-line2"
              placeholder="Apt #"
              type="text"
              value={rentalHistory.address2}
              onChange={this.handleChange}
            />
            <input
              id='address-level2'
              className="input input--city"
              name="address-level2"
              autoComplete="shipping address-level2"
              placeholder="City*"
              type="text"
              value={rentalHistory.city}
              onChange={this.handleChange}
            />
            <input
              id='postal-code'
              className="input input--zip"
              name="postal-code"
              autoComplete="shipping postal-code"
              placeholder="Zip Code"
              type="text"
              value={rentalHistory.city}
              onChange={this.handleChange}
            />
            <input
              id="end-date"
              className="input input--end-date"
              name="end-date"
              placeholder="Move Out Date*"
              type="text"
              value={rentalHistory.dateEnd}
              onChange={this.handleChange}
            />
            <textarea
              id="leaving-reason"
              className="textarea textarea--reason"
              name="leaving-reason"
              placeholder="Reason For Leaving"
              type="text"
              value={rentalHistory.reason}
              onChange={this.handleChange}
            />
            <input 
              type="button" 
              value="Submit" 
              onClick={this.submitForm} />
          </form>
        </section>
        );
      }      
}

export default Form;




 