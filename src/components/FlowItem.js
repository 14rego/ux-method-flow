import React from 'react';

class FlowItem extends React.Component {
  render() {
    const { itemObj } = this.props;
    return (
      <div className="row">
        {itemObj.Type !== 'Suggestion' ? (
          <div className="col-12">
            <p className="h4 card-title">{itemObj.Que}</p>
          </div>
        ) : (
          <div className="col-12">
            <p className="h4 card-title">{itemObj.Head}</p>
            <p className="card-text">{itemObj.Description}</p>
          </div>
        )}
      </div>
    );
  }
}
export default FlowItem;
