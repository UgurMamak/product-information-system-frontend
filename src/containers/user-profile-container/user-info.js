import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as UserActions from "../../redux/user/userActions";
import { API } from "../../helpers/api-config";
import { Link } from "react-router-dom";
import SettingsIcon from "@material-ui/icons/Settings";
import IconButton from "@material-ui/core/IconButton";

class userinfo extends Component {
  componentDidMount() {
    this.props.actions.getUser(this.props.userId);
  }

  render() {
    return (
      <div>
        {this.props.userReducer.userData.map((user) => (
          <div key={user.id} className="row">
            <div className="col-sm-2">
              <div className="text-center">
                <img
                  style={{ borderRadius: "50%" }}
                  src={API + "userImage/" + user.imageName}
                  className="avatar img-circle img-thumbnail"
                  alt="avatar"
                />
              </div>
            </div>

            <div className="col-sm-9">
              <div className="col-xs-6">
                <div className="col-sm-10">
                  <h1>{user.firstName + " " + user.lastName}</h1>
                </div>
                {localStorage.getItem("userId") === user.id ? (
                  <Link to={"/userUpdate/" + localStorage.getItem("userId")}>
                    <IconButton
                      color="secondary"
                      size="medium"
                      aria-label="upload picture"
                      component="span"
                    >
                      <SettingsIcon />
                      Ayarlar
                    </IconButton>
                  </Link>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        ))}
        <br />
        <br />
        <br />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    userReducer: state.UserReducer,
    loginReducer: state.LoginReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getUser: bindActionCreators(UserActions.getUser, dispatch),
      resetLoginState: bindActionCreators(UserActions.resetLogin, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(userinfo);
