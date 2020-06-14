import React, { Component } from "react";
import { User } from "../../helpers/role";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Alert, AlertTitle } from "@material-ui/lab";
import * as UserActions from "../../redux/user/userActions";
class index extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password1: "",
    password2: "",
    control: false,
    controlMessage: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    this.setState({control:false,controlMessage:""});
  };

  handleSave = async (event) => {
    if (
      this.state.email !== "" &&
      (this.state.firstName !== "") &
        (this.state.lastName !== "") &
        (this.state.password1 !== "") &
        (this.state.password2 !== "")
    ) {
      if (this.state.password1 === this.state.password2) {
        const data = new FormData();
        data.append("email", this.state.email);
        data.append("password", this.state.password1);
        data.append("firstName", this.state.firstName);
        data.append("lastName", this.state.lastName);
        //data.append("image", this.state.imageFile);
        data.append("role", "User");
        data.append("processType", User);
        this.props.actions.saveUser(data);
      } else {
        this.setState({
          control: true,
          controlMessage: "!!!Girilen parola değerleri eşleşmedi.!!!",
        });
      }
    } else {
      this.setState({
        control: true,
        controlMessage: "!!!Değerleri boş bırakmayınız.!!!",
      });
    }
    event.preventDefault();
  };

  render() {
    if (this.props.user.registerStatus === 1) {
      console.log("giriş başarılı");
      return <Redirect to={"/profile/"+localStorage.getItem("userId")} />;
    }

    return (
      <div className="col-md-6">
        <div className="register-form">
          <h3 className="billing-title text-center">Üye Ol</h3>
          <br />
          <br />
          {this.props.user.registerStatus === 0 ? (
            <Alert severity="error">
              <AlertTitle>UYARI</AlertTitle>
              {this.props.user.message}
            </Alert>
          ) : (
            <div />
          )}
           {this.state.control=== true ? (
            <Alert severity="error">
              <AlertTitle>UYARI</AlertTitle>
              {this.state.controlMessage}
            </Alert>
          ) : (
            <div />
          )}
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
            <br />
            <button
              onClick={this.handleSave}
              className="view-btn color-2 mt-20 w-100"
            >
              <span>Üye Ol</span>
            </button>
          </form>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    user: state.RegisterReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      saveUser: bindActionCreators(UserActions.saveUser, dispatch),
      resetRegisterState: bindActionCreators(
        UserActions.resetRegister,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(index);
