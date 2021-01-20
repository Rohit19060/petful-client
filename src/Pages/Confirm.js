import React from "react";

export default class Confirm extends React.Component {
  state = {
    pet: this.props.location.state,
  };

  componentDidMount() {
    localStorage.setItem("token", this.state.pet.name);
  }

  render() {
    const { pet } = this.state;
    return (
      <div className="confirm">
        <h2>Congratulations!</h2>
        <h3>You Adopted:</h3>
        <h4>{pet.name}</h4>
        <img src={pet.imageURL} alt="" />
      </div>
    );
  }
}
