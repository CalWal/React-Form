import React from "react";

class TravelForm extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      isVegan: false,
      isVegetarian: false,
      isKosher: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  render() {
    return (
      <main>
        <form>
          <input
            onChange={this.handleChange}
            placeholder="First Name"
            type="text"
            name="firstName"
            value={this.state.firstName}
          />
          <br />
          <input
            onChange={this.handleChange}
            placeholder="Last Name"
            type="text"
            name="lastName"
            value={this.state.lastName}
          />
          <br />
          <input
            onChange={this.handleChange}
            placeholder="Age"
            type="text"
            name="age"
            value={this.state.age}
          />
          <br />
          <input
            onChange={this.handleChange}
            type="radio"
            name="gender"
            value="Male"
            checked={this.state.gender === "Male"}
          />{" "}
          Male
          <br />
          <input
            onChange={this.handleChange}
            type="radio"
            name="gender"
            value="Female"
            checked={this.state.gender === "Female"}
          />{" "}
          Female
          <br />
          <select onChange={this.handleChange} name="destination">
            <option value="">Please Select A Destination:</option>
            <option value="New York">New York</option>
            <option value="London">London</option>
            <option value="Germany">Germany</option>
          </select>
          <br />
          <p>Dietary Requirements:</p>
          <input
            type="checkbox"
            name="isVegan"
            onChange={this.handleChange}
            checked={this.state.isVegan}
          />{" "}
          Vegan
          <br />
          <input
            type="checkbox"
            name="isVegetarian"
            onChange={this.handleChange}
            checked={this.state.isVegetarian}
          />{" "}
          Vegetarian
          <br />
          <input
            type="checkbox"
            name="isKosher"
            onChange={this.handleChange}
            checked={this.state.isKosher}
          />{" "}
          Kosher
          <br />
          <br />
          <button>Submit</button>
        </form>
        <hr />
        <h2>Entered information:</h2>
        <p>
          Your name: {this.state.firstName} {this.state.lastName}
        </p>
        <p>Your age: {this.state.age}</p>
        <p>Your gender: {this.state.gender}</p>
        <p>Your destination: {this.state.destination}</p>
        <p>
          Your dietary restrictions:
          <p>{this.state.isVegan && "Vegan"}</p>
          <p>{this.state.isVegetarian && "Vegetarian"}</p>
          <p>{this.state.isKosher && "Kosher"}</p>
        </p>
      </main>
    );
  }
}

export default TravelForm;
