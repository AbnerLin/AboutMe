import React from 'react';
import { translate } from 'react-i18next';
import {Timeline, TimelineEvent} from 'react-event-timeline';
import * as Typicons from 'react-icons/lib/ti';

import './index.css';

class Resume extends React.Component {

  render() {
    const { t } = this.props;

    return (
      <div id="resume" className="container-fluid">
        <Timeline>
          {
            // t("resume.data_list") === 'object' ? console.log('!!') : console.log('??')
            Object.values(t("resume.data_list", { returnObjects: true })).map((value, index) => {

              const Contrubutions = () => {
                var contributions = null;
                if(value.contributions) {
                  contributions = value.contributions.map((value, index) => {
                    return (<li key={index}>{value}</li>);
                  });
                }
                return contributions;
              }

              return (
                <TimelineEvent
                  key={index}
                  title={value.title || 'a'}
                  subtitle={value.subTitle}
                  subtitleStyle={{color: "#2962FF"}}
                  createdAt={value.date}>
                  <ul>
                    <Contrubutions />
                  </ul>
                </TimelineEvent>
              );
            })
          }

            <TimelineEvent title="John Doe sent a SMS"
                           createdAt="2016-09-12"
                           icon={<Typicons.TiMail />}
            >
                I received the payment for $543. Should be shipping the item within a couple of hours.
            </TimelineEvent>
            <TimelineEvent
                title="You sent an email to John Doe"
                createdAt="2016-09-11"
                icon={<i className="material-icons md-18">email</i>}
            >
                Like we talked, you said that you would share the shipment details? This is an urgent order and so I
                    am losing patience. Can you expedite the process and pls do share the details asap. Consider this a
                    gentle reminder if you are on track already!
            </TimelineEvent>

             <TimelineEvent
                title="You sent an email to John Doe"
                createdAt="2015-09-11"
                icon={<i className="material-icons md-18">email</i>}
            >
                Like we talked, you said that you would share the shipment details? This is an urgent order and so I
                    am losing patience. Can you expedite the process and pls do share the details asap. Consider this a
                    gentle reminder if you are on track already!
            </TimelineEvent>
        </Timeline>
      </div>
    );
  }
}

export default translate()(Resume);
