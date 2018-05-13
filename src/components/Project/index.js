import React from 'react';
import { translate } from 'react-i18next';
import { Card, CardHeader, CardFooter, CardBody, CardTitle, CardText, Row, Col } from 'reactstrap';
import List from '../List';
import './index.css';

class Project extends React.Component {


  render() {
    const { t } = this.props;

    return (
      <Row id="project" className="px-5 py-3 d-flex justify-content-center">
        <Row className="w-100 d-flex justify-content-center">

          {
            Object.values(t("projects.data_list", {returnObjects: true})).map((value, index) => {

              const Roles = () => {
                var roles = null;
                if(value.roles.data_list) {
                 roles = value.roles.data_list.join(", ");
                }
                return roles;
              }

              return (
                <Col sm="12" className="m-3" key={index}>
                  <Card>
                    <CardHeader><strong>{value.title}</strong></CardHeader>
                    <CardBody>
                      <CardTitle></CardTitle>
                      <CardText>{value.description}</CardText>
                      <Row>
                        <Col md="6">
                          { t("projects.features_title") }
                          <List dataList={value.features.data_list} />
                        </Col>
                        <Col md="6">
                          { t("projects.key_techs_title") }
                          <List dataList={value.key_techs.data_list} />
                        </Col>
                      </Row>
                    </CardBody>
                    <CardFooter>
                      <Row>
                        <Col md="6">
                          { t("projects.link_title") }: <a href={value.link}>{value.link}</a>
                        </Col>
                        <Col md="6">
                          { t("projects.role_title") }: <Roles />
                        </Col>
                      </Row>
                    </CardFooter>
                  </Card>
                </Col>
              )
            })
          }
        </Row>
      </Row>
    )
  }
}

export default translate()(Project);
