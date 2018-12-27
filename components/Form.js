import React from "react";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      isFriendly: false,
      gender: "",
      favColour: "Red"
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
      <form>
        <input
          onChange={this.handleChange}
          type="text"
          name="firstName"
          placeholder="First Name"
          value={this.state.firstName}
        />
        <br />
        <input
          onChange={this.handleChange}
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={this.state.lastName}
        />
        <br />

        <label>
          <input
            type="checkbox"
            name="isFriendly"
            checked={this.state.isFriendly}
            onChange={this.handleChange}
          />
          Is friendly
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={this.state.gender === "male"}
            onChange={this.handleChange}
          />
          Male
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={this.state.gender === "female"}
            onChange={this.handleChange}
          />
          Female
        </label>
        <br />
        <label>Fave Colour:</label>
        <select
          onChange={this.handleChange}
          value={this.state.favColour}
          name="favColour"
        >
          <option value="Red">Red</option>
          <option value="Blue">Blue</option>
          <option value="Green">Green</option>
          <option value="White">White</option>
          <option value="Black">Black</option>
        </select>
        <div>
          <h1>
            {this.state.firstName} {this.state.lastName}
          </h1>
          {this.state.isFriendly === true && (
            <h2>Is a confirmed friendly {this.state.gender}</h2>
          )}
          {this.state.favColour !== "Red" && (
            <h2>And has a shit choice in colour... Red is the best!</h2>
          )}
        </div>
        <button>Confirm Details</button>
      </form>
    );
  }
}

export default Form;
