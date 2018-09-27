import React from "react";

class Header extends React.Component {
  render() {
    const { active } = this.props;

    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <a className="navbar-brand" href="/">
            UX Methods
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className={`nav-item ${active === "root" ? "active" : ""}`}>
                <a href="/" className="nav-link">
                  Home
                  {active === "root" ? (
                    <span className="sr-only">(current)</span>
                  ) : null}
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#handled"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Keyword
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/keyword/Brainstorming">
                    Brainstorming
                  </a>
                  <a className="dropdown-item" href="/keyword/Concept">
                    Concept
                  </a>
                  <a className="dropdown-item" href="/keyword/Design">
                    Design
                  </a>
                  <a className="dropdown-item" href="/keyword/Framework">
                    Framework
                  </a>
                  <a className="dropdown-item" href="/keyword/Environment">
                    Environment
                  </a>
                  <a className="dropdown-item" href="/keyword/Qualitative">
                    Qualitative
                  </a>
                  <a className="dropdown-item" href="/keyword/Quantitative">
                    Quantitative
                  </a>
                  <a className="dropdown-item" href="/keyword/Research">
                    Research
                  </a>
                  <a className="dropdown-item" href="/keyword/Strategy">
                    Strategy
                  </a>
                  <a className="dropdown-item" href="/keyword/Workshop">
                    Workshop
                  </a>
                </div>
              </li>{" "}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#handled"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Participants
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/role/User-Experience">
                    User Experience
                  </a>
                  <a className="dropdown-item" href="/role/Design">
                    Design
                  </a>
                  <a className="dropdown-item" href="/role/Stakeholders">
                    Stakeholders
                  </a>
                  <a className="dropdown-item" href="/role/Product-Owners">
                    Product Owners
                  </a>
                  <a className="dropdown-item" href="/role/Experts">
                    Experts
                  </a>
                  <a className="dropdown-item" href="/role/Leadership">
                    Leadership
                  </a>
                  <a className="dropdown-item" href="/role/Users">
                    Users
                  </a>
                  <a className="dropdown-item" href="/role/Project-Managers">
                    Project Managers
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#handled"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Stage
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/stage/Explore">
                    Explore
                  </a>
                  <a className="dropdown-item" href="/stage/Imagine">
                    Imagine
                  </a>
                  <a className="dropdown-item" href="/stage/Test">
                    Test
                  </a>
                </div>
              </li>
              <li
                className={`nav-item ${
                  active === "effective" ? "active" : null
                }`}
              >
                <a href="/effective/4" className="nav-link">
                  Effective 4+
                  {active === "effective" ? (
                    <span className="sr-only">(current)</span>
                  ) : null}
                </a>
              </li>
              <li
                className={`nav-item ${
                  active === "simplicity" ? "active" : null
                }`}
              >
                <a href="/simplicity/2" className="nav-link">
                  Simplicity ≤2
                  {active === "simplicity" ? (
                    <span className="sr-only">(current)</span>
                  ) : null}
                </a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-info my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </header>
    );
  }
}
export default Header;
