'use strict';
import React, { Component } from 'react';
import ScrollLink from 'rc-scroll-anim/lib/ScrollLink';
import scrollScreen from 'rc-scroll-anim/lib/ScrollScreen';

class Link extends Component {
  render() {
    return (
      <div id="list">
        <ScrollLink className="list-point" location="page1" />
        <ScrollLink className="list-point" location="page2" />
      </div>
    );
  }
}
export default Link;