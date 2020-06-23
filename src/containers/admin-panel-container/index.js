import React, { Component } from "react";
import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Paper from "@material-ui/core/Paper";
import * as UserActions from "../../redux/user/userActions";
import UserList from "./user-list";
import UserMenu from "../../components/user-menu";
import InputBase from "@material-ui/core/InputBase";
import { Admin } from "../../helpers/role";
import { Redirect } from "react-router-dom";
import Notfound from "../../components/common/not-found";
class index extends Component {
  constructor() {
    super();
    this.state = {
      tabValue: "1",
      value: "",
      role: "",
      search: null,
    };
  }
  changeTab = (event, newValue) => {
    this.setState({ tabValue: newValue });
    console.log("değr", this.state.tabValue);
  };
  componentDidMount() {
    this.props.actions.getAllUsers();
  }

  handleChange = (event, userId) => {
    this.setState({ role: event.target.value });
  };
  handleUpdate = (userId) => {
    console.log("deneme", userId);
    console.log("role", this.state.role);

    const data = new FormData();
    data.append("role", this.state.role);
    data.append("id", userId);
    this.props.actions.updateUser(data);
    window.location.reload();
  };

  searchSpace = (event) => {
    let keyword = event.target.value;
    this.setState({ search: keyword });
  };

  render() {
    console.log("users", this.props.users.userData);

    const users = [];
    this.props.users.userData
      .filter((data) => {
        if (this.state.search == null) return data;
        else if (
          data.firstName
            .toLowerCase()
            .includes(this.state.search.toLowerCase()) ||
          data.lastName
            .toLowerCase()
            .includes(this.state.search.toLowerCase()) ||
          data.role.toLowerCase().includes(this.state.search.toLowerCase())
        ) {
          return data;
        }
      })
      .map((data) => {
        users.push(
          <UserList
            key={data.id}
            user={data}
            role={this.state.role}
            handleUpdate={this.handleUpdate}
            handleChange={this.handleChange}
            handleDelete={this.handleDelete}
          />
        );
      });

    return (
      <div>
        <section className="banner-area organic-breadcrumb" />
        {localStorage.getItem("userId") !== null ? <UserMenu /> : ""}
        <section className="tracking_box_area section_gap">
          <div className="container">
            <div>
              <TabContext value={this.state.tabValue}>
                <div position="static">
                  <TabList
                    style={{ color: "orange" }}
                    onChange={this.changeTab}
                    aria-label="simple tabs example"
                  >
                    <Tab
                      label="Kullanıcılar"
                      value="1"
                      onClick={this.sharePost}
                    />
                  </TabList>
                </div>

                <TabPanel value="1">
                  <div className="row">
                    <InputBase
                      name="productName"
                      id="productName"
                      placeholder="Ürün aramak için..."
                      onChange={(e) => this.searchSpace(e)}
                    />
                    <TableContainer component={Paper}>
                      <Table aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell
                              style={{ fontWeight: "bold", fontSize: "15px" }}
                            >
                              Ad
                            </TableCell>
                            <TableCell
                              style={{ fontWeight: "bold", fontSize: "15px" }}
                              align="right"
                            >
                              Soyad
                            </TableCell>
                            <TableCell
                              style={{ fontWeight: "bold", fontSize: "15px" }}
                              align="right"
                            >
                              Email
                            </TableCell>
                            <TableCell
                              style={{ fontWeight: "bold", fontSize: "15px" }}
                              align="right"
                            >
                              Yetki
                            </TableCell>
                            <TableCell
                              style={{ fontWeight: "bold", fontSize: "15px" }}
                              align="right"
                            >
                              Güncelle
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>{users}</TableBody>
                      </Table>
                    </TableContainer>
                  </div>
                </TabPanel>
                <TabPanel value="2">
                  <div className="row">
                    <div className="col-md-12">2.sasgd</div>
                  </div>
                </TabPanel>
              </TabContext>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.UserReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getAllUsers: bindActionCreators(UserActions.getAllUser, dispatch),
      updateUser: bindActionCreators(UserActions.updateUserRole, dispatch),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(index);
