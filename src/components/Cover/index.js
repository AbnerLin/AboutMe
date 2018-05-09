import React from 'react';
import { Col, Card, Button, CardTitle, CardText } from 'reactstrap';
import { translate } from 'react-i18next';

import './index.css';
import * as Typicons from 'react-icons/lib/ti'


class Cover extends React.Component {

  constructor(props) {
    super(props);

    console.log(this.props.language);
  }

  componentWillReceiveProps(nextProps) {
    // console.log(nextProps.language);
  }

  render() {
    const { t } = this.props;

    return (
      <div id="main" className="container-fluid">
        <div className="row">
          <div className="col-md-3 d-flex justify-content-center">
            <img src="/images/head.jpg" alt="head" className="rounded-circle head" />
          </div>

          <div className="col-md-9 d-flex justify-content-center">
            <div className="row w-100 d-flex align-items-center">
              <Col md="5">
                <Card body outline color="primary">
                  <CardTitle>{ t("personal_info.title") }</CardTitle>
                  <CardText>
                    <Typicons.TiMail className="icon" />{ t("mail") }
                    <br />
                    { t("personal_info.mail") }<br />
                    <Typicons.TiDevicePhone className="icon" />{ t("mobile") }
                    <br />
                    { t("personal_info.mobile") }<br />
                    <Typicons.TiSocialLinkedin className="icon" />{ t("linkedin") }
                    <br />
                    { t("personal_info.linkedin") }
                  </CardText>
                </Card>
              </Col>

              <Col md="7">
                <Card body outline color="primary">
                  <CardTitle>{ t("skill.title") }</CardTitle>
                    <ul>
                      {
                        Object.values(t("skill.skill_list", { returnObjects: true })).map((value, index) =>
                          <li key={index}>{value}</li>
                        )
                      }
                    </ul>
                </Card>
              </Col>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default translate()(Cover);

