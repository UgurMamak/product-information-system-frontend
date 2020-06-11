import React, { Component } from 'react'
import {Link} from "react-router-dom"
export default class index extends Component {
    render() {
        return (
            <div className="menutop-wrap">
            <div className="menu-top container">
              <div className="d-flex justify-content-between align-items-center">
                <ul className="list">
                  <li>
                    <a href="tel:+12312-3-1209">TEL</a>
                  </li>
                  <li>
                    <a href="mailto:support@colorlib.com">
                     ugurmamak98@gmail.com
                    </a>
                  </li>
                </ul>
                <ul className="list">
                <Link to="login">
                  <li>
                    Giriş
                  </li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        )
    }
}
