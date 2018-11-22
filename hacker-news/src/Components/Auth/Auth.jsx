import React, { Component } from "react";
import "../Auth/Auth.css";

class Auth extends Component {
  state = {
    username: "jessjelly"
  };
  render() {
    const { children, user } = this.props;
    return user ? (
      children
    ) : (
      <form className="auth" onSubmit={this.handleSubmit}>
        <label htmlFor="username" />
        <input
          className="username"
          id="username"
          type="text"
          onChange={this.handleChange}
          value={this.state.username}
        />
        <button>Login</button>
      </form>
    );
  }

  handleChange = event => {
    this.setState({
      username: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.login(this.state.username);
  };
}
export default Auth;
