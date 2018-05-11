import React from 'react';
import { Col, Card, CardTitle, CardText } from 'reactstrap';
import { translate } from 'react-i18next';

import * as Typicons from 'react-icons/lib/ti';
import './index.css';

import List from '../List';

class Cover extends React.Component {

  render() {
    const { t } = this.props;

    return (
      <div id="main" className="d-flex align-items-center">
        <div id="middle" className="container-fluid p-3">
          <div className="row">
            <div className="col-md-3 d-flex justify-content-center head-block m-3 m-md-0">
              <div className="row">
                <div className="col-12 d-flex justify-content-center">
                  <img src="/images/head.jpg" alt="head" className="rounded-circle head" />
                </div>
                <div className="col-12 d-flex justify-content-center text-center">
                  <div>
                  <h4> { t("personal_info.name") } </h4>
                  <h5> { t("personal_info.job_title") } </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-9 d-flex justify-content-center">
              <div className="row w-100 d-flex align-items-center">
                <Col md="5" className="m-2 m-md-0">
                  <Card body>
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

                <Col md="7" className="m-2 m-md-0">
                  <Card body>
                    <CardTitle>{ t("skill.title") }</CardTitle>
                      <List dataList={t("skill.data_list", { returnObjects: true })} />
                  </Card>
                </Col>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default translate()(Cover);

