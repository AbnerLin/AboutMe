import React from 'react';
import { translate } from 'react-i18next';
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
      <div id="resume" className="container-fluid p-md-5">
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
      </div>
    );
  }
}

export default translate()(Resume);
