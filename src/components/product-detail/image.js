import React, { Component } from "react";
import { API } from "../../helpers/api-config";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";
export default class image extends Component {
  state = {
    activeIndex: 0,
    animating: false,
  };
  next = () => {
    if (this.state.animating) return;
    const nextIndex =
      this.state.activeIndex === this.props.image.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  };

  previous = () => {
    if (this.state.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? this.props.image.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  };

  goToIndex = (newIndex) => {
    if (this.state.animating) return;
    this.setState({ activeIndex: newIndex });
  };
  render() {
    return (
      <Carousel
        activeIndex={this.state.activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators
          items={this.props.image}
          activeIndex={this.state.activeIndex}
          onClickHandler={this.goToIndex}
        />

        {this.props.image.map((image) => (
          <CarouselItem
            style={{ width: "100px" }}
            className="single-prd-item"
            tag="div"
            key={image.id}
            onExiting={() => this.setState({ animating: true })}
            onExited={() => this.setState({ animating: false })}
          >
            <img
              style={{ width: "100%", height: "600px" }}
              src={API + "productImage/" + image.imageName}
            />
          </CarouselItem>
        ))}

        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={this.previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={this.next}
        />
      </Carousel>
    );
  }
}
