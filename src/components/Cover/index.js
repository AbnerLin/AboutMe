import React from 'react';
// import { connect } from 'react-redux';
import { Col, Card, Button, CardTitle, CardText } from 'reactstrap';

import './index.css';
import head from './head.png';

class Cover extends React.Component {

  constructor(props) {
    super(props);

    console.log(this.props.language);
  }

  componentWillReceiveProps(nextProps) {
    // console.log(nextProps.language);
  }

  render() {
    return (
      <div id="main" className="container-fluid">
        <div className="row">
          <div className="col-md-4 d-flex justify-content-center">
            <img src={head} alt="head" className="rounded-circle head " />
          </div>
          <div className="col-md-4 d-flex justify-content-center">
            <Card body outline color="primary">
              <CardTitle>Special Title Treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional content.

              </CardText>
              <Button color="secondary">Button</Button>
            </Card>
          </div>
          <div className="col-md-4 d-flex justify-content-center">
            <Card body outline color="primary">
              <CardTitle>Special Title Treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional content.

              </CardText>
              <Button color="secondary">Button</Button>
            </Card>
          </div>
        </div>
      </div>
    )
  }
}

export default Cover;

