import React from "react";
import { Link } from "react-router-dom";

export default class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <div className="intro">
          <h1>Welcome to Petful</h1>
          <h3>The Best Place to Find Your New Pet</h3>
          <img
            src="https://images.pexels.com/photos/733416/pexels-photo-733416.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          ></img>
        </div>
        <div className="title">
          <h3>Are you ready to find your new forever friend?</h3>
          <section className="text">
            <h2> The Process of Adopting From Us</h2>
            <p>
              Pets will be adopted based on a first come, first adopt concept.
              The animal that comes into our shelter first will be the first
              animal ready to go home. Customers are also placed in a queue to
              wait thier turn for the next animal ready for their furever home!
              Will it be you?
            </p>
          </section>
        </div>
        <section className="more">
          <div>
            <h2>Ready to Adopt Now?</h2>
            <Link to={"/adopt"}>
              <button>Adopt Now!</button>
            </Link>
          </div>
          <div>
            <h2>Need More Info About Petful?</h2>
            <Link to={"/about"}>
              <button>Learn More</button>
            </Link>
          </div>
        </section>
      </div>
    );
  }
}
