import React from 'react';
import { translate } from 'react-i18next';
import { Card, CardHeader, CardFooter, CardBody, CardTitle, CardText } from 'reactstrap';
import List from '../List';
import './index.css';

class Project extends React.Component {


  render() {
    const { t } = this.props;

    return (
      <div id="project" className="row px-5 py-3 d-flex justify-content-center">
        <div className="w-100 row d-flex justify-content-center">

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
                <div className="col-12 m-3" key={index}>
                  <Card>
                    <CardHeader><strong>{value.title}</strong></CardHeader>
                    <CardBody>
                      <CardTitle></CardTitle>
                      <CardText>{value.description}</CardText>
                      <div className="row">
                        <div className="col-md-6">
                          { t("projects.features_title") }
                          <List dataList={value.features.data_list} />
                        </div>
                        <div className="col-md-6">
                          { t("projects.key_techs_title") }
                          <List dataList={value.key_techs.data_list} />
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
