import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//actions
import * as categoryActions from "../../redux/category/categoryActions";
import * as userActions from "../../redux/user/userActions";

//component
import SearchBox from "../search-box/";

class index extends Component {
  componentDidMount() {
    this.props.actions.getCategories();
  }

  render() {
    const categoriesList = [];
    this.props.categories.categories.map((category) =>
      categoriesList.push(
        <li key={category.id} className="nav-item">
          <a className="nav-link" href="blog.html">
            {category.categoryName}
          </a>
        </li>
      )
    );

    return (
      <header className="header_area sticky-header">
        <div className="main_menu">
          <nav className="navbar navbar-expand-lg navbar-light main_box">
            <div className="container">      
              <a className="navbar-brand logo_h" href="/home">
              <img src="template2/logo.png" style={{"height":"70px","width":"150px"}} alt="" />
                
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>

              <div
                className="collapse navbar-collapse offset"
                id="navbarSupportedContent"
              >
                <ul className="nav navbar-nav menu_nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="/home">
                      Anasayfa
                    </a>
                  </li>
                 

                  <li className="nav-item">
                    <a className="nav-link" href="/category">
                      Kategoriler
                    </a>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">
                      İletişim
                    </Link>
                  </li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li className="nav-item">
                    <Link to="/login" className="cart">
                      <span className="ti-user" />
                    </Link>
                  </li>
               
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <SearchBox /> 
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.CategoryReducer,
    user: state.loginReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch
      ),
      getUser: bindActionCreators(userActions.loginSuccess(), dispatch),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(index);
