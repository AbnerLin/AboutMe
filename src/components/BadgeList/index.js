import React from 'react';
import { Badge } from 'reactstrap';
import { translate } from 'react-i18next';

class BadgeList extends React.Component {

  render() {

    return this.props.dataList ? (
      <div>
        {this.props.title}：
        {
          this.props.dataList.map((value, index) => {
            return <Badge className="m-1" color={this.props.color} key={index}>{value}</Badge>
          })
        }
      </div>
    ) : (
      null
    )

  }
}

export default translate()(BadgeList);
