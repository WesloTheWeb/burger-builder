import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/index';
 
class Logout extends Component {
    componentDidMount () {
        this.props.onLogout(this.props.history);
    }

  render() {
    return  (
        <Redirect />
    );
  } 
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logout()) 
    };
};

export default connect(null, mapDispatchToProps)(Logout);
