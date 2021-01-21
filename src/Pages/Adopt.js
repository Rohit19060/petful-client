import React from "react";
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
      alert(`${person} added to queue`);
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
            <button>Adopt Cat!</button>
          </Link>
          <Link to={{ pathname: "/Confirmation", state: dogs[0] }}>
            <button>Adopt Dog!</button>
          </Link>
        </div>
      );
    } else if (peoples[1] === user) {
      return <h3 className="danger">You Are Next In Line</h3>;
    }
  };
  componentDidMount() {
    this.getPets();
    this.getPeople();
    let countdown = setInterval(this.petAdopted, 5000);
    this.setState({ countdown: countdown });
  }
  componentWillUnmount() {
    clearInterval(this.state.countdown);
  }

  // clearToken = () => {
  //   localStorage.removeItem("token");
  //   this.setState({
  //     comeback: null,
  //   });
  // };

  render() {
    const { cats, dogs, peoples, comeback, name } = this.state;
    return comeback ? (
      <div className="adopt">
        <h3>You Have Already Adopted {comeback}!</h3>
        <h4>Please Come Back Another Day</h4>
        {/* <button onClick={this.clearToken()}>Want to Adopt More</button> */}
      </div>
    ) : cats.length > 0 ? (
      <div>
        <h2 className="text-center mt-4 mb-3">Pets Available Now</h2>
        <div className="pets">
          <section className="petCard">
            <h2 className="name">Name: {cats[0].name} </h2>
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
          <section className="petCard">
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
          <div className="RegistrationForm mt-4">
            <h2>Adopt a Pet Today!</h2>
            <p>Enter Your Full Name</p>
            <form onSubmit={this.handleSubmit}>
              <div className="inputDiv mb-3">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={name}
                  onChange={this.onChange}
                />
              </div>
              <div className="text-center mb-3">
                <input type="submit" value="Submit" />
              </div>
            </form>
          </div>
          <div>
            <h4>Total People In Line: {peoples.length}</h4>
            <section>
              <h3>Next in Queue: {peoples[0]}</h3>
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
          </div>
        </div>
      </div>
    ) : (
      <>
        <h2>Connection Error</h2>
      </>
    );
  }
}
