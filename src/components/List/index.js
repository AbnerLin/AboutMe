import React from 'react';

class List extends React.Component {

  render() {
    return this.props.dataList ? (
      <ul>
        {
          this.props.dataList.map((value, index) => {
            return <li key={index}>{value}</li>
          })
        }
      </ul>
    ) : (
      null
    )
  }
}

export default List;
