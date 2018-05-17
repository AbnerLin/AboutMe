import React from 'react';
import { Col, Card, CardTitle, Row, Container } from 'reactstrap';
import { translate } from 'react-i18next';
import List from '../List';
import BadgeList from '../BadgeList';

import * as Typicons from 'react-icons/lib/ti';
import './index.css';


class Cover extends React.Component {

  render() {
    const { t } = this.props;

    return (
      <div id="main" className="d-flex align-items-center">
        <Container fluid={true} id="middle" className="p-3">
          <Row>
            <Col md="3" className="d-flex justify-content-center head-block m-3 m-md-0">
              <Row>
                <Col sm="12" className="d-flex flex-column justify-content-center text-center">
                    <img src="images/head.jpg" alt="head" className="rounded-circle head" />
                    <h4> { t("personal_info.name") } </h4>
                    <h5> { t("personal_info.job_title") } </h5>
                </Col>
              </Row>
            </Col>
            <Col md="9" className="d-flex justify-content-center">
              <Row className="w-100">
                <Row className="w-100 d-flex align-items-center">
                  <Col md="5" className="m-2 m-md-0">
                    <Card body>
                      <CardTitle>{ t("personal_info.title") }</CardTitle>
                      <div>
                        <Typicons.TiMail className="icon" />{ t("mail") }
                        <div className="indent">{ t("personal_info.mail") }</div>

                        <Typicons.TiDevicePhone className="icon" />{ t("mobile") }
                        <div className="indent">{ t("personal_info.mobile") }</div>

                        <Typicons.TiSocialLinkedin className="icon" />{ t("linkedin") }
                        <div className="indent"><a href={ t("personal_info.linkedin") }>LinkedIn</a></div>
                      </div>
                    </Card>
                  </Col>

                  <Col md="7" className="m-2 m-md-0">
                    <Card body>
                      <CardTitle>{t("skill.title")}</CardTitle>
                      <List dataList={t("skill.data_list", { returnObjects: true })} />
                    </Card>
                  </Col>
                </Row>
                <Row className="w-100 d-flex align-items-center">
                  <Col sm="12">
                    <Card body className="unlimit-height m-2 mx-md-0 mt-md-4 mb-md-1 ">
                      <CardTitle>{ t("tool.title") }</CardTitle>
                      <BadgeList title={t("tool.Farmiliar.title")} dataList={t("tool.Farmiliar.data_list", { returnObjects: true })} color="info" />
                      <BadgeList title={t("tool.Knowledge.title")} dataList={t("tool.Knowledge.data_list", { returnObjects: true })} color="info" />
                    </Card>
                  </Col>
                </Row>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default translate()(Cover);

