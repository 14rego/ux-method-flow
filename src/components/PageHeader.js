import React from 'react';
import { Link, navigate } from 'gatsby';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

class PageHeader extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.state = {
      term: this.props.fSearch,
      title: this.props.title,
      isOpen: false
    };
  }
  handleToggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  handleSearchChange = event => {
    this.setState({ term: event.target.value });
  };
  handleSearchSubmit = event => {
    navigate(`/search/?q=${this.state.term}`);
    event.preventDefault();
  };
  render() {
    return (
      <header>
        <Navbar color="light" light expand="lg" className="bg-light fixed-top">
          <NavbarBrand href="/">{this.state.title}</NavbarBrand>
          <NavbarToggler onClick={this.handleToggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Keyword
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <Link to="/keyword/Brainstorming">Brainstorming</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/keyword/Concept">Concept</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/keyword/Design">Design</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/keyword/Framework">Framework</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/keyword/Environment">Environment</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/keyword/Qualitative">Qualitative</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/keyword/Quantitative">Quantitative</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/keyword/Research">Research</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/keyword/Strategy">Strategy</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/keyword/Workshop">Workshop</Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Participants
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <Link to="/role/User-Experience">User Experience</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/role/Design">Design</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/role/Stakeholders">Stakeholders</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/role/Product-Owners">Product Owners</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/role/Experts">Experts</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/role/Leadership">Leadership</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/role/Users">Users</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/role/Project-Managers">Project Managers</Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Category
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <Link to="/category/Imagine">Imagine</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/category/Explore">Explore</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/category/Design">Design</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/category/Evaluate">Evaluate</Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <Link to="/most-effective" className="nav-link">
                  Effective 4+
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/simplicity" className="nav-link">
                  Simplicity ≤2
                </Link>
              </NavItem>
            </Nav>
            {this.props.showSearch !== 'false' ? (
              <form
                className="form-inline my-2 my-lg-0"
                onSubmit={this.handleSearchSubmit}
              >
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  value={this.state.term}
                  placeholder="Search"
                  aria-label="Search"
                  onChange={this.handleSearchChange}
                />
                <button
                  className="btn btn-outline-info my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            ) : null}
          </Collapse>
        </Navbar>
      </header>
    );
  }
}

export default PageHeader;
