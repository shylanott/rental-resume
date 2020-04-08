import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Preview extends Component {
  renderHeader = people => {
    return (
      <section className="resume__section resume__section--applicant">
        <h2 className="resume__subtitle">Applicant</h2>
        <ul className="applicant-list">
          {people.map((applicant, i) => {
            if (!applicant.name || !applicant.email || !applicant.phone)

            return (
              <li className="applicant" key={i}>
                <div className="applicant__name">{applicant.name}</div>
                <div className="applicant__email">{applicant.email}</div>
                <div className="applicant__phone">{applicant.phone}</div>
              </li>
            );
          })}
        </ul>
      </section>
    );
  };

  renderRentalHistory = rentalHistory => {
    return (
      <section className="resume__section resume__section--rental-history">
        <h2 className="resume__subtitle">Rental History</h2>
        <ul className="rental-list">
          {rentalHistory.map((rental, i) => {
            if (
              !rental.address1 ||
              !rental.city ||
              !rental.state ||
              !rental.zip ||
              !rental.dateStart ||
              !rental.dateEnd ||
              !rental.reason
            )
            return (
              <li className="apartment" key={i}>
                {`${rental.address1} ${rental.address2} ${rental.city}, ${
                  rental.state
                } ${rental.zip}`}
                <br />
                {` (${rental.dateStart} - ${rental.dateEnd})`}
                <br />
                <em>Reason For Leaving:</em> {rental.reason}
              </li>
            );
          })}
        </ul>
      </section>
    );
  };

  render() {
    const {
      people,
      rentalHistory
    } = this.props;
    return (
      <section className="page">
        <div className="resume">
          <div className="resume__container">
            <header className="resume__header">
              <button
                className="btn--print--preview"
                onClick={this.props.printResume}
              >
                <svg width="1024" height="1024" viewBox="0 0 1024 1024">
                  <path d="M256 64h512v128h-512v-128z" />
                  <path d="M960 256h-896c-35.2 0-64 28.8-64 64v320c0 35.2 28.794 64 64 64h192v256h512v-256h192c35.2 0 64-28.8 64-64v-320c0-35.2-28.8-64-64-64zM128 448c-35.346 0-64-28.654-64-64s28.654-64 64-64 64 28.654 64 64-28.652 64-64 64zM704 896h-384v-320h384v320z" />
                </svg>
                Print
              </button>
              <h1 className="resume__title">Rental Resume</h1>
            </header>

            {this.renderHeader(people)}

            {this.renderRentalHistory(rentalHistory)}
          </div>
          <section className="resume__section incomplete">
            <h2 className="resume__subtitle incomplete__subtitle">
              Missing Sections
            </h2>
            <ul className="incomplete-list">
              <li className="incomplete__link incomplete__link--applicant">
                <Link to="/applicant">Applicant</Link>
              </li>
              <li className="incomplete__link incomplete__link--summary">
                <Link to="/summary">Summary</Link>
              </li>
              <li className="incomplete__link incomplete__link--employment-history">
                <Link to="/employment-history">Employment History</Link>
              </li>
              <li className="incomplete__link incomplete__link--rental-history">
                <Link to="/rental-history">Rental History</Link>
              </li>
              <li className="incomplete__link incomplete__link--income">
                <Link to="/income">Income</Link>
              </li>
            </ul>
          </section>
        </div>
      </section>
    );
  }
}

Preview.propTypes = {
  people: PropTypes.array,
  summary: PropTypes.string,
  rentalHistory: PropTypes.array,
  employmentHistory: PropTypes.array,
  income: PropTypes.string,
  printResume: PropTypes.func
};

export default Preview;
