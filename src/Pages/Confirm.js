import React from "react";
export default class Confirm extends React.Component {
  state = {
    pet: this.props.location.state,
  };

  componentDidMount() {
    localStorage.setItem("token", this.state.pet.name);
  }

  // clearToken = () => {
  //   localStorage.removeItem("token");
  //   this.props.history.push("/adopt");
  // };

  render() {
    const { pet } = this.state;
    return (
      <div className="confirm">
        <h2>Congratulations!</h2>
        <h3>You Adopted: {pet.name}</h3>
        <img src={pet.imageURL} alt="" />
        {/* <button onClick={this.clearToken()}>Want to Adopt More</button> */}
      </div>
    );
  }
}
