import React from 'react';
import { connect } from 'react-redux';

class Cover extends React.Component {

  constructor(props) {
    super(props);

    console.log(this.props.language);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.language);
  }

  render() {
    return (
      <div>
        {this.props.language}
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    language: state.lang.language
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cover);

