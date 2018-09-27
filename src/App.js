import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import MethodCardList from "./MethodCardList";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }
  componentDidMount() {
    this.setState({
      loading: false,
      activePage: "root"
    });
  }
  render() {
    return (
      <div className={`loading-${this.state.loading} container`}>
        <Header active={this.state.activePage} />
        <div className="row">
          <div className="col-12">
            <br />
            <br />
            <br />
            <MethodCardList />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
