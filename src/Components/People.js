import React from "react";
import { Link } from "react-router-dom";

class People extends React.Component {
  adoptNow = () => {
    const { peoples, dog, cat } = this.props.pet;
    const { user } = this.props;
    if (peoples[0] === user) {
      return (
        <div className="adopt">
          <h2>{user}</h2>
          <h2>Ready to Adopt?</h2>
          <Link to={{ pathname: "/Confirmation", state: cat }}>
            <button> Adopt Cat Now! </button>
          </Link>
          <Link to={{ pathname: "/Confirmation", state: dog }}>
            <button> Adopt Dog Now! </button>
          </Link>
        </div>
      );
    } else if (peoples[1] === user) {
      return <h3 style={{ color: "red" }}>You Are Next In Line</h3>;
    }
  };

  render() {
    const { peoples } = this.props.pet;
    return (
      <div>
        <section>
          <h2>Next in Line: {peoples[0]}</h2>
          {this.adoptNow()}
        </section>
        <section>
          <h4>Waiting List:</h4>
          <p>{peoples[1]}</p>
          <p>{peoples[2]}</p>
          <p>{peoples[3]}</p>
          <p>{peoples[4]}</p>
          <p>{peoples[5]}</p>
        </section>
        <h4>
          Total People In Line:
          <span style={{ color: "red" }}> {peoples.length} </span>
        </h4>
      </div>
    );
  }
}

export default People;
