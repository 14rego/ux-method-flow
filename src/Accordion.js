import React, { Component } from "react";

export class Accordion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  render() {
    const { children, title, unique } = this.props;
    return (
      <div className={`card card-acc-${unique}`}>
        <div className="card-header" id={`heading-acc-${unique}`}>
          <h5 className="mb-0">
            <button
              className="btn btn-link collapsed"
              data-toggle="collapse"
              data-target={`#collapse-acc-${unique}`}
              aria-expanded="false"
              aria-controls={`collapse-acc-${unique}`}
            >
              {title}
            </button>
          </h5>
        </div>
        <div
          id={`collapse-acc-${unique}`}
          className="collapse"
          aria-labelledby={`heading-acc-${unique}`}
        >
          <div className="card-body">{children}</div>
        </div>
      </div>
    );
  }
}

export default Accordion;
