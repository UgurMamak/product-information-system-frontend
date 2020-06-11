import React, { Component } from "react";
import { API } from "../../../helpers/api-config";

//component
import CommentAdd from "../comment-add";
import ComemntLike from "../comment-like";
//import Pagination from "../../components/paginiton/Paginition";

export default class index extends Component {
  render() {
    const commentList = [];
    const item = this.props.comment.map((comment) =>
      commentList.push(
        <div className="review_item" key={comment.id}>
          <div className="media">
            <div className="d-flex">
              <img
                className="media-object"
                src={API + "userImage/" + comment.imageName}
                alt=""
              />
            </div>
            <div className="media-body">
              <ComemntLike />
              <h4>{comment.firstName + " " + comment.lastName}</h4>
            </div>
          </div>
          <p>{comment.content}</p>
        </div>
      )
    );

    return (
      <div className="col-lg-6">
        <div className="row total_rate">
          <div className="col-6">
            <div className="box_total">
              <h5>Overall</h5>
              <h4>4.0</h4>
              <h6>(03 Reviews)</h6>
            </div>
          </div> 

          <div className="col-6">
            <div className="rating_list">
              <h3>Based on 3 Reviews</h3>
              <ul className="list">Puan verme butonu burda olsun</ul>
            </div>
          </div>
        </div> 
        <br/><br/>
     

        <div className="review_list">{commentList}</div>
      </div>
    );
  }
}
