import React, { Component } from 'react';
import { Collapse, Button, CardBody, CardHeader, Card } from 'reactstrap';

export class Accordion extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      collapse: false
    };
  }
  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    const { children, title, unique } = this.props;
    return (
      <Card className={`card-acc-${unique}`}>
        <CardHeader>
          <h5 className="mb-0">
            <Button color="link" onClick={this.toggle}>
              {title}
            </Button>
          </h5>
        </CardHeader>
        <Collapse isOpen={this.state.collapse}>
          <CardBody>{children}</CardBody>
        </Collapse>
      </Card>
    );
  }
}

export default Accordion;
