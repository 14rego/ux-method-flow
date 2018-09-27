import React from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import Header from "./Header";
import MethodCardList from "./MethodCardList";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      activePage: "root"
    };
  }
  componentDidMount() {
    this.setState({
      loading: false,
      activePage: "root"
    });
  }
  render() {
    const NotFound = () => (
      <div className="text-center">
        <h1 className="h3">Sorry, this page does not exist.</h1>
        <p>
          You could <Link to="/">go back to the home page</Link>.
        </p>
      </div>
    );
    return (
      <div className={`loading-${this.state.loading} container`}>
        <Header active={this.state.activePage} />
        <div className="row">
          <div className="col-12">
            <br />
            <br />
            <br />
            <Router>
              <NotFound default />
              <MethodCardList path="/" />
              <MethodCardList path="/detail/:fUnique" />
              <MethodCardList path="/effective/:fEffective" />
              <MethodCardList path="/keyword/:fKey" />
              <MethodCardList path="/role/:fRole" />
              <MethodCardList path="/simplicity/:fSimple" />
              <MethodCardList path="/stage/:fStage" />
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
