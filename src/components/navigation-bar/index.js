import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//actions
import * as categoryActions from "../../redux/category/categoryActions";

//component
import SearchBox from "../search-box/";

class index extends Component {
  componentDidMount() {
    this.props.actions.getCategories();
  }

  render() {
    const categoriesList = [];
    const item = this.props.categories.categories.map((category) =>
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
              <a className="navbar-brand logo_h" href="index.html">
                <img src="img/logo.png" alt="" />
                LOGO
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
                  <li className="nav-item active">
                    <Link className="nav-link" to="/home">
                      Anasayfa
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/category">
                      Kategoriler
                    </Link>
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
                  <li className="nav-item">
                    <button className="search">
                      <span className="lnr lnr-magnifier" id="search" />
                    </button>
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
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch
      ),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(index);
