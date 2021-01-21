import React from "react";
import { Link } from "react-router-dom";

export default class About extends React.Component {
  render() {
    return (
      <div className="title mt-10">
        <h1>About</h1>
        <p>
          With our first in first out approach, we are hoping to help all dogs
          and cats find homes. Typically, older dogs and cats remain in shelters
          while all the young "cute" ones find homes. Get on our waitlist today,
          and find your forever friend!
        </p>
        <Link to={"/adopt"}>
          <button type="submit">Find Your Pet Now!</button>
        </Link>
      </div>
    );
  }
}
