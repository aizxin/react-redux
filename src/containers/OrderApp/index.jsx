'use strict';
import React, { Component } from 'react';
import { Header } from '../../components';

class OrderApp extends Component {
  render() {
    const { children, ...restProps } = this.props;
    return (
      <Header {...restProps}/>
    );
  }
}
export default OrderApp;