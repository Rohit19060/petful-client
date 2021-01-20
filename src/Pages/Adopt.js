import React from "react";
import config from "../config";
import Services from "../services";
import { Link } from "react-router-dom";

export default class Adopt extends React.Component {
  state = {
    comeback: localStorage.getItem("token"),
    dogs: [],
    cats: [],
    peoples: [],
    countdown: null,
    name: "",
    user: "",
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = (ev) => {
    ev.preventDefault();
    let person = this.state.name;
    Services.addName(person).then((res) => {
      this.setState({ user: res, name: "" });
    });
  };

  getPeople = () => {
    Services.fetchPeoples().then((res) => {
      this.setState({
        peoples: res,
      });
    });
  };

  getPets = () => {
    Services.fetchPets().then((res) => {
      this.setState({
        dogs: res.dog[0],
        cats: res.cat[0],
      });
    });
  };

  petAdopted = () => {
    let type = Math.floor(Math.random() * 8.3);
    if (type > 3) {
      Services.deleteCat();
      Services.deletePerson();
      Services.addPerson();
      this.getPeople();
      this.getPets();
    } else {
      Services.deleteDog();
      Services.deletePerson();
      Services.addPerson();
      this.getPeople();
      this.getPets();
    }
  };

  adoptNow = () => {
    const { peoples, dogs, cats, user } = this.state;
    if (peoples[0] === user) {
      clearInterval(this.state.countdown);
      return (
        <div className="adopt">
          <h2>{user}</h2>
          <h2>Ready to Adopt?</h2>
          <Link to={{ pathname: "/Confirmation", state: cats[0] }}>
            <button> Adopt Cat Now! </button>
          </Link>
          <Link to={{ pathname: "/Confirmation", state: dogs[0] }}>
            <button> Adopt Dog Now! </button>
          </Link>
        </div>
      );
    } else if (peoples[1] === user) {
      return <h3>You Are Next In Line</h3>;
    }
  };
  componentDidMount() {
    this.getPets();
    this.getPeople();
    let countdown = setInterval(this.petAdopted, 2000);
    this.setState({ countdown: countdown });
  }
  componentWillUnmount() {
    clearInterval(this.state.countdown);
  }

  render() {
    const { cats, dogs, peoples, comeback, name } = this.state;
    return comeback ? (
      <div className="adopt">
        <h3>You Have Already Adopted {comeback}!</h3>
        <h4>Please Come Back Another Day</h4>
      </div>
    ) : cats.length > 0 ? (
      <div>
        <h2>Pets Available Now:</h2>
        <div className="pets">
          <section className="petcard">
            <h3 className="name">Name: {cats[0].name} </h3>
            <section className="info">
              <img src={cats[0].imageURL} alt="" />
              <div>
                <p>Age: {cats[0].age}</p>
                <p>Breed: {cats[0].breed}</p>
                <p>Gender: {cats[0].gender}</p>
                <p>My Story: {cats[0].story}</p>
              </div>
            </section>
          </section>
          <section className="petcard">
            <h3 className="name">Name: {dogs[0].name} </h3>
            <section className="info">
              <img src={dogs[0].imageURL} alt="" />
              <div>
                <p>Age: {dogs[0].age}</p>
                <p>Breed: {dogs[0].breed}</p>
                <p>Gender: {dogs[0].gender}</p>
                <p>My Story: {dogs[0].story}</p>
              </div>
            </section>
          </section>
        </div>
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
          <div>
            <section>
              <h2>Next in Queue: </h2>
              <h2>{peoples[0]}</h2>
              {this.adoptNow()}
            </section>
            <section>
              <h4>Waiting List:</h4>
              <ul>
                <li>{peoples[1]}</li>
                <li>{peoples[2]}</li>
                <li>{peoples[3]}</li>
                <li>{peoples[4]}</li>
                <li>{peoples[5]}</li>
              </ul>
            </section>
            <h4>Total People In Line: {peoples.length}</h4>
          </div>
        </div>
      </div>
    ) : (
      <></>
    );
  }
}
