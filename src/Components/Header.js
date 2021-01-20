import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        Petful
        <div>
          <section className="nav">
            <nav role="navigation">
              <Link to="/">Home</Link>
              <Link to="/About">About</Link>
              <Link to="/Adopt">Adopt</Link>
            </nav>
          </section>
        </div>
      </div>
    );
  }
}

export default Header;
