import React, { Component } from "react";

export default class index extends Component {
  state={
    firstName:"",
    lastName:"",
    email:"",
    password1:"",
    password2:"",
    control:false,
    controlMessage:"",
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSave= async(event)=>
  {
  }

  render() {
    return (
      <div className="col-md-6">
        <div className="register-form">
          <h3 className="billing-title text-center">Üye Ol</h3>
        <br/><br/>
          <form>
            <input
              type="text"
              name="firstName"
              onChange={this.handleChange}
              placeholder="Adınız*"
              required
              className="common-input mt-20"
            />
            <input
              type="text"
              name="lastName"
              onChange={this.handleChange}
              placeholder="Soyadınız*"
              required
              className="common-input mt-20"
            />
            <input
              type="email"
              name="email"
              onChange={this.handleChange}
              placeholder="Email adresiniz*"
              required
              className="common-input mt-20"
            />
           
            <input
              type="password"
              name="password1"
              onChange={this.handleChange}
              placeholder="Parola*"
              required
              className="common-input mt-20"
            />
            <input
              type="password"
              name="password2"
              onChange={this.handleChange}
              placeholder="Parola tekrar*"
              required
              className="common-input mt-20"
            />
            <br/>
            <button onClick={this.handleSave} className="view-btn color-2 mt-20 w-100">
              <span>Üye Ol</span>
            </button>
          </form>
        </div>
      </div>
    );
  }
}
