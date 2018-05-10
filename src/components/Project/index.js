import React from 'react';
import { translate } from 'react-i18next';
import { Card, Col, CardHeader, CardFooter, CardBody, CardTitle, CardText } from 'reactstrap';

import './index.css';

class Project extends React.Component {


  render() {
    const { t } = this.props;

    return (
      <div id="project" className="row px-5 py-3 d-flex justify-content-center">
        <div className="w-100 row d-flex justify-content-center">

          {
            Object.values(t("projects.data_list", {returnObjects: true})).map((value, index) => {

              const iteratorLI = (obj) => {
                var iter = null;
                if(obj) {
                  iter = obj.map((value, index) => {
                    return(<li key={index}>{value}</li>)
                  });
                }
                return iter;
              }

              const Features = () => {
                return iteratorLI(value.features.data_list);
              }

              const KeyTechs = () => {
                return iteratorLI(value.key_techs.data_list);
              }

              const Roles = () => {
                var roles = null;
                if(value.roles.data_list) {
                 roles = value.roles.data_list.join(", ");
                }
                return roles;
              }

              return (
                <div className="col-12 m-3" key={index}>
                  <Card>
                    <CardHeader>{value.title}</CardHeader>
                    <CardBody>
                      <CardTitle></CardTitle>
                      <CardText>{value.description}</CardText>
                      <div className="row">
                        <div className="col-md-6">
                          { t("projects.features_title") }
                          <ul>
                            <Features />
                          </ul>
                        </div>
                        <div className="col-md-6">
                          { t("projects.key_techs_title") }
                          <ul>
                            <KeyTechs />
                          </ul>
                        </div>
                      </div>
                    </CardBody>
                    <CardFooter>
                      <div className="row">
                        <div className="col-md-6">
                          { t("projects.link_title") }: <a href={value.link}>{value.link}</a>
                        </div>
                        <div className="col-md-6">
                          { t("projects.role_title") }: <Roles />
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                </div>
              )
            })
          }

        </div>
      </div>
    )
  }
}

export default translate()(Project);
