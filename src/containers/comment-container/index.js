import React, { Component } from "react";

//component
import CommentList from "../../components/comment/comment-list";
import CommentAdd from "../../components/comment/comment-add";
export default class index extends Component {
  render() {
    return (
      <div>
        <section className="product_description_area">
          <div className="container">
            <div className="tab-content" id="myTabContent">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="home-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    Description
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="profile-tab"
                    data-toggle="tab"
                    href="#profile"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Specification
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="contact-tab"
                    data-toggle="tab"
                    href="#contact"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false"
                  >
                    Comments
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="review-tab"
                    data-toggle="tab"
                    href="#review"
                    role="tab"
                    aria-controls="review"
                    aria-selected="false"
                  >
                    Reviews
                  </a>
                </li>
              </ul>

              <div
                className="tab-pane fade show active"
                id="review"
                role="tabpanel"
                aria-labelledby="review-tab"
              >
                <br />
                <div className="row">
                  <CommentList />
                  <CommentAdd />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
