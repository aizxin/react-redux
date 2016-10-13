'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Icon, Button } from 'antd';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';

const clientHeight = document.documentElement.clientHeight;
function onScrollEvent(e) {
  const header = document.getElementById('header');
  if (e.pageY >= clientHeight) {
    if (header.className.indexOf('home-nav-bottom') < 0) {
      header.className += ' home-nav-bottom';
    }
  } else if (header.className.indexOf('home-nav-bottom') >= 0) {
    header.className = header.className.replace(/home-nav-bottom/ig, '');
  }
}
class Page2 extends Component {
  render() {
    return (
      <ScrollOverPack scrollName="page2" className="content-wrapper"
      playScale={1} replay scrollEvent={onScrollEvent}
      hideProps={{ image: { reverse: true } }}
    >
      <QueueAnim className="text-wrapper" delay={0} key="text" duration={0} leaveReverse>
        hhh
      </QueueAnim>
      <TweenOne className="bottom-wrapper" animation={{ y: 0, opacity: 1, duration: 0, delay: 0 }}
        style={{ transform: 'translateY(50px)', opacity: 0 }}
      />
    </ScrollOverPack>
    );
  }
}
export default Page2;