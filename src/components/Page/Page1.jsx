'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router';
import ScrollElement from 'rc-scroll-anim/lib/ScrollElement';
import { Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';

function typeFunc(a) {
  if (a.key === 'line') {
    return 'right';
  } else if (a.key === 'button') {
    return 'bottom';
  }
  return 'left';
}

class Page1 extends Component {
  render() {
    return (
      <section id="banner">
      <ScrollElement scrollName="page1" className="page">
        <QueueAnim className="banner-text-wrapper" type={typeFunc} delay={300}>
          <h2 key="h2">ANT <p>DESIGN</p></h2>
        </QueueAnim>
      </ScrollElement>
    </section>
    );
  }
}
export default Page1;