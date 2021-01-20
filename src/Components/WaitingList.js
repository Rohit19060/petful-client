import React from "react";
import config from "../config";
import People from "./People";

export default class WaitingList extends React.Component {
  state = {
    name: "",
    curUser: "",
  };
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = (ev) => {
    ev.preventDefault();
    let person = this.state.name;
    fetch(`${config.API_ENDPOINT}/people`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ person }),
    })
      .then((res) =>
        !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
      )
      .then((res) => {
        this.setState({ curUser: res, name: "" });
      });
  };

  render() {
    const { name, curUser } = this.state;
    return (
      <div className="adoption">
        <div>
          <h2>Adopt a Pet Today!</h2>
          <p>Enter Your Full Name:</p>
          <form className="RegistrationForm" onSubmit={this.handleSubmit}>
            <div className="inputDiv">
              <label htmlFor="name">Name </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={name}
                onChange={this.onChange}
              />
            </div>
            <div className="text-center mb-3 ">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
        <People user={curUser} pet={this.props} />
      </div>
    );
  }
}
