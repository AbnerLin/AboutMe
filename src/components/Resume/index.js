import React from 'react';
import { translate } from 'react-i18next';
import { Row, Container, Card, CardTitle } from 'reactstrap';
import {Timeline, TimelineEvent} from 'react-event-timeline';
import * as Typicons from 'react-icons/lib/ti';
import List from '../List';

import './index.css';

class Resume extends React.Component {


  render() {
    const { t } = this.props;

    const getIcon = (type) => {
      switch(type) {
        case 'graduation':
          return <Typicons.TiMortarBoard />
        case 'work':
          return <Typicons.TiFlash />
        default:
          return <Typicons.TiStarFullOutline />
      }
    }

    return (
      <Container fluid={true} id="resume" className="p-md-5">
        <Row className="px-md-3 pb-md-3 py-3 py-md-0">
          <Card body>
            <CardTitle>{t("experience.title")}</CardTitle>
            <List dataList={t("experience.data_list", { returnObjects: true })} />
          </Card>
        </Row>
        <Timeline>
          {
            Object.values(t("resume.data_list", { returnObjects: true })).map((value, index) => {
              return (
                <TimelineEvent
                  key={index}
                  title={value.title}
                  subtitle={value.subTitle}
                  subtitleStyle={{color: "#2962FF"}}
                  createdAt={value.date}
                  icon={getIcon(value.type)}>
                  <List dataList={value.contributions} />
                </TimelineEvent>
              );
            })
          }
        </Timeline>
      </Container>
    );
  }
}

export default translate()(Resume);
