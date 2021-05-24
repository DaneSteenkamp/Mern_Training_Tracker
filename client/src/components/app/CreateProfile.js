import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class CreateProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: " ",
    };
    this.onChangeUsername = this.onChangeUsername.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const profile = {
      username: this.state.username,
    };
    console.log(profile);

    axios
      .post("http://localhost:5000/profiles/add", profile)
      .then((res) => console.log(res.data));

    this.setState({
      username: " ",
    });
    window.location = "/create";
  }

  render() {
    return (
      <div>
        <h3>Create A Profile</h3>
        <p>
          Create a profile name in order to log all your personal excersises.
        </p>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Profile name:</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create Profile"
              className="btn btn-primary"
            />
          </div>
        </form>
        <Link to="/">
          <button type="button">Return to Home Page</button>
        </Link>
      </div>
    );
  }
}
