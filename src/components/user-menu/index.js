import React, { Component } from "react";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import MenuIcon from "@material-ui/icons/Menu";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { Admin, Operator } from "../../helpers/role";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PersonIcon from "@material-ui/icons/Person";
import AddIcon from "@material-ui/icons/Add";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
import PeopleIcon from "@material-ui/icons/People";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import GroupAddIcon from "@material-ui/icons/GroupAdd";

//actions
import * as userActions from "../../redux/user/userActions";
class LeftNav extends Component {
  state = {
    left: false,
    right: false,
  };

  toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    this.setState({ ...this.state, [anchor]: open });
  };

  list = (anchor) => (
    <div
      role="presentation"
      onClick={this.toggleDrawer(anchor, false)}
      onKeyDown={this.toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button key={""}>
          <a href={"/profile/" + localStorage.getItem("userId")}>
            <ListItemIcon>
              <PersonIcon fontSize="default" />
            </ListItemIcon>
            Profil Sayfası
          </a>
        </ListItem>

        <ListItem button key={"productadd"}>
          <Link to="/ProductAdd">
            <ListItemIcon>
              <AddIcon fontSize="default" />
            </ListItemIcon>
            Ürün Ekle
          </Link>
        </ListItem>

        {localStorage.getItem("role") === Admin ||
        localStorage.getItem("role") === Operator ? (
          <div>
            <ListItem button key={"kategori"}>
              <Link to="/categoryOperation">
                <ListItemIcon>
                  <SpellcheckIcon fontSize="default" />
                </ListItemIcon>
                Kategori İşlemleri
              </Link>
            </ListItem>
          </div>
        ) : (
          <div />
        )}

        {localStorage.getItem("role") === Admin ? (
          <ListItem button key={"kategori"}>
            <Link to="/adminPanel">
              <ListItemIcon>
                <GroupAddIcon fontSize="default" />
              </ListItemIcon>
              Üyeler
            </Link>
          </ListItem>
        ) : (
          ""
        )}

        <Divider />
        <ListItem button key={"denemekey"}>
          <Link to="" onClick={this.logout}>
            <ListItemIcon>
              <ExitToAppIcon fontSize="default" />
            </ListItemIcon>
            Çıkış Yap
          </Link>
        </ListItem>
      </List>
    </div>
  );

  logout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    this.props.actions.resetLoginState();
    return <Redirect to="/login" />;
  };

  render() {
    return (
      <div style={{ backgroundColor: "#ffba00" }}>
        {["left"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button size="small" onClick={this.toggleDrawer(anchor, true)}>
              <MenuIcon color="primary" fontSize="default" />
            </Button>
            <Drawer
              anchor={anchor}
              open={this.state[anchor]}
              onClose={this.toggleDrawer(anchor, false)}
            >
              {this.list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      resetLoginState: bindActionCreators(userActions.resetLogin, dispatch),
    },
  };
}
export default connect(null, mapDispatchToProps)(LeftNav);
