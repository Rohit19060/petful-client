import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>PetFul</h1>
        <section className="nav">
          <nav role="navigation">
            <Link to="/">Home</Link>
            <Link to="/adopt">Adopt</Link>
            <Link to="/about">About</Link>
          </nav>
        </section>
      </div>
    );
  }
}

export default Header;
