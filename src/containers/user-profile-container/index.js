import React, { Component } from 'react'

export default class index extends Component {
    render() {
        return (
            <div>
                <div className="container bootstrap snippet">
                  <div className="row">
             <div className="col-sm-2">
              <div className="text-center">
                <img
                style={{"borderRadius":"50%"}}
                  src={require("../../img/product/ruj.jpg")}
                  /*src={require("../user-register-container/profileImage.jpg")}*/ className="avatar img-circle img-thumbnail"
                  alt="avatar"
                />
              </div> </div>
            </div>
            </div></div>
        )
    }
}
