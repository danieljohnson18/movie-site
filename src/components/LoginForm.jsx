import React, { Component } from "react";

class LoginForm extends Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form action="">
          <div className="form-group">
            <label htmlFor="Username">Username</label>
            <input id="Username" type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="Password">Password</label>
            <input id="Password" type="text" className="form-control" />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
