import React, { Component } from "react";

export class Rating extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: this.props.rating,
      total: this.props.total,
      shape: this.props.shape
    };
  }
  createStars = () => {
    let ratingObj = [];
    let stars = [];

    // Outer loop to create parent
    for (let i = 0; i < this.state.rating; i++) {
      stars.push(
        <i key={i + 1} className={`fas fa-fw fa-${this.state.shape}`} />
      );
    }
    for (let j = this.state.rating; j < this.state.total; j++) {
      stars.push(
        <i key={j + 1} className={`far fa-fw fa-${this.state.shape}`} />
      );
    }
    ratingObj.push(<span key="0">{stars}</span>);
    return ratingObj;
  };

  render() {
    return <div className="rating">{this.createStars()}</div>;
  }
}

export default Rating;
