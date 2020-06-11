import React, { Component } from 'react'
import LikeIcon from "@material-ui/icons/ThumbUpAltOutlined";
import DislikeIcon from "@material-ui/icons/ThumbDownAltOutlined";
import IconButton from "@material-ui/core/IconButton";
import { Button } from "@material-ui/core";
export default class index extends Component {
    render() {
        return (
            <div>
                <IconButton
                  onClick={this.handleLike}
                  color="secondary"
                  aria-label="delete"
                >
                  <LikeIcon fontSize="small" />
                </IconButton>
                <IconButton
                  onClick={this.handleDislike}
                  color="secondary"
                  aria-label="delete"
                >
                  <DislikeIcon fontSize="small" />
                </IconButton>
              </div>
        )
    }
}
