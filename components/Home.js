import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <main>
                <section className="home">
                    <div className="home__text">
                        <h2 className="home__text__title">
                            From San Diego to New York City, create a rental resume that sets you apart.
                        </h2>
                        <Link to="/about" className="btn btn--learn-more">
                            About
                        </Link>
                        <Link to="/applicant" className="btn btn--get-started">
                            Get Started
                        </Link>
                    </div>
                </section>
            </main>
        );
    }
}

export default Home;