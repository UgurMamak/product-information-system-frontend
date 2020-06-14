import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Alert, AlertTitle } from "@material-ui/lab";
import * as UserActions from "../../redux/user/userActions";
class index extends Component {
  state = {
    email: "",
    password: "",
  }; 
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    this.props.actions.resetLoginState();
  };

  handleSave = async (event) => {
    if (this.state.email !== "" && this.state.password !== "") {
      this.props.actions.loginUser({
        email: this.state.email,
        password: this.state.password,
      });
    } 
    event.preventDefault();
  };

  render() {
    if (this.props.user.loginStatus === 1) {
     // console.log("giriş başarılı");
       return <Redirect to={"/profile/"+localStorage.getItem("userId")} />;
    }

    return (
      <div className="col-md-6">
        {console.log("değer", this.props.user)}
        <div className="login-form">
          <h3 className="billing-title text-center">Giriş Yap</h3>
          <br /> <br /> <br /> <br />
          {this.props.user.loginStatus === 0 ? (
            <Alert severity="error">
              <AlertTitle>UYARI</AlertTitle>
              {this.props.user.message}
            </Alert>
          ) : (
            <div />
          )}
          <form action="#">
            <input
              type="text"
              name="email"
              placeholder="Mail Adresiniz*"
              required
              className="common-input mt-20"
              onChange={this.handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Parolanız*"
              required
              className="common-input mt-20"
              onChange={this.handleChange}
            />
            <br />
            <button
              onClick={this.handleSave}
              className="view-btn color-2 mt-20 w-100"
            >
              <span>Giriş Yap</span>
            </button>
          </form>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    user: state.LoginReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loginUser: bindActionCreators(UserActions.LoginUser, dispatch),
      resetLoginState: bindActionCreators(UserActions.resetLogin, dispatch),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(index);
