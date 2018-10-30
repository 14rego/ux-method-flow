import React, { Component } from 'react';

export class PageBody extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="row">
        <div className="col-12">
          <br />
          <br />
          <br />
          {children}
        </div>
      </div>
    );
  }
}

export default PageBody;
