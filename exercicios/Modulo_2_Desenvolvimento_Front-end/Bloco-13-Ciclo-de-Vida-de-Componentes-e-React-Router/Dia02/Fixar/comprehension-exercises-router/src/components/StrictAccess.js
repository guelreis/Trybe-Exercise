import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class StrictAccess extends Component {
  render() {
    const { username, password } = this.props.user;
    if (!(username==='joao' && password === '1234')){
      alert('Access denied');
      return <Redirect to="/" />
    }
    return (
      <p> Welcome Miguel !</p>
    );
  }
}

export default StrictAccess;