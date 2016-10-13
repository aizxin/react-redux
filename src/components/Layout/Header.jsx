'use strict';
import React, { Component } from 'react';
import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';
import { Select, Menu, Row, Col, Icon, Button, Popover,Modal } from 'antd';
import enquire from 'enquire.js';
import debounce from 'lodash.debounce';
import classNames from 'classnames';

import Search from '../Search';
class Header extends Component {
    constructor() {
      super();
      this.state = {
        menuMode: 'horizontal',
        isFirstFrame: true,
      };
    }

  componentDidMount() {

    enquire.register('only screen and (min-width: 320px) and (max-width: 940px)', {
      match: () => {
        this.setState({ menuMode: 'inline' });
      },
      unmatch: () => {
        this.setState({ menuMode: 'horizontal' });
      },
    });
    const loadingNode = document.getElementById('ant-site-loading');
    if (loadingNode) {
      this.timer = setTimeout(() => {
        loadingNode.parentNode.removeChild(loadingNode);
      }, 5000);
    }
  }
  componentWillUnmount() {
    clearTimeout(this.timer);

  }
  render() {
    const { location } = this.props;
    const module = location.pathname.replace(/\/$/, '')
            .split('/').slice(1).join('/');
    
    let activeMenuItem = module || 'home';
    // if (activeMenuItem === 'components' || location.pathname === 'changelog') {
    //   activeMenuItem = 'docs/react';
    // }
    const headerClassName = classNames({
      clearfix: true,
      'home-nav-white': !this.state.isFirstFrame,
    });

    const menuMode = this.state.menuMode;
    const menu = [
      <Menu mode={menuMode} selectedKeys={[activeMenuItem]} id="nav" key="nav">
          <Menu.Item key="home">
            <Link to="/">
              首页
            </Link>
          </Menu.Item>
          <Menu.Item key="user">
            <Link to="/user">
              美食
            </Link>
          </Menu.Item>
          <Menu.Item key="travel">
            <Link to="/travel">
              旅游
            </Link>
          </Menu.Item>
      </Menu>,
    ];
    return (
      <header id="header" className={headerClassName}>
        <Popover
          overlayClassName="nav"
          placement="bottomRight"
          content={menuMode === 'inline' ? menu : null}
          trigger="click"
        >
          <Icon
            className="nav-phone-icon"
            type="menu"
          />
        </Popover>
        <Row>
          <Col lg={5} md={7} sm={8} xs={22}>
            <Link to="/" id="logo">
              <img alt="logo" src="https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg" />
              <span>Ant Design</span>
            </Link>
          </Col>
          <Col lg={19} md={17} sm={16} xs={2} style={{ display: 'block' }}>
              <div id="nav-wo">
                <Search />
                {menuMode === 'horizontal' ? menu : null}
              </div>
          </Col>
        </Row>
      </header>
    );
  }
}
export default Header;