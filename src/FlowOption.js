import React from "react";

class FlowOption extends React.Component {
  render() {
    const { ques, val, handler, suggest } = this.props;
    return (
      <div className="col-3">
        <button
          onClick={handler}
          data-ans={ques}
          data-val={val}
          data-suggest={suggest}
          className="btn btn-lg btn-block btn-outline-secondary"
        >
          {val}
        </button>
      </div>
    );
  }
}
export default FlowOption;
