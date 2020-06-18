import React, { Component } from "react";
import CategoryAdd from "./category-add";
import CategoryList from "./category-list";
import TypeList from "./type-list";
import TypeAdd from "./type-add";
import UserMenu from "../user-menu";
export default class index extends Component {
  render() {
    return (
      <div>
        <section className="banner-area organic-breadcrumb" />
        {localStorage.getItem("userId") !== null ? <UserMenu /> : ""}
        <section className="tracking_box_area section_gap">
          <div className="container">
            <div className="tracking_box_inner">
              <div className="row tracking_form">
                <div className="col-md-6 form-group">
                  <CategoryList />
                  <br />
                  <br />
                  <CategoryAdd />
                </div>
                <div className="col-md-6 form-group">
                  <TypeList />
                  <br />
                  <br />
                  <TypeAdd />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
