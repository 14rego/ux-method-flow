import React, { Component } from "react";

export class Card extends Component {
  render() {
    const { children, cssClass } = this.props;
    return (
      <div className={`card ${cssClass}`}>
        <div className="card-body">{children}</div>
      </div>
    );
  }
}

export default Card;
