'use strict';
import React, { Component } from 'react';
import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';
import { Select, Menu, Row, Col, Icon, Button, Popover } from 'antd';
import enquire from 'enquire.js';
import debounce from 'lodash.debounce';
import classNames from 'classnames';
class OrderApp extends Component {
    constructor(props) {
    super(props);

    this.onScroll = debounce(() => {
      const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;
      if (scrollTop >= clientHeight) {
        this.setState({ isFirstFrame: false });
      } else {
        this.setState({ isFirstFrame: true });
      }
    }, 100);

    this.state = {
      menuMode: 'horizontal',
      isFirstFrame: true,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);

    enquire.register('only screen and (min-width: 320px) and (max-width: 940px)', {
      match: () => {
        this.setState({ menuMode: 'inline' });
      },
      unmatch: () => {
        this.setState({ menuMode: 'horizontal' });
      },
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  handleSearch(value) {
    this.context.router.push({ pathname: `${value}/` });
  }

  handleSelectFilter(value, option) {
    return option.props['data-label'].indexOf(value.toLowerCase()) > -1;
  }

  handleLangChange(){
    if (typeof localStorage !== 'undefined') {
      const locale = this.context.intl.locale === 'zh-CN' ? 'en-US' : 'zh-CN';
      localStorage.setItem('locale', locale);
      location.reload();
    }
  }

  render() {
    const { location } = this.props;
    const module = location.pathname.replace(/\/$/, '')
            .split('/').slice(0, -1)
            .join('/');
    let activeMenuItem = module || 'home';
    if (activeMenuItem === 'components' || location.pathname === 'changelog') {
      activeMenuItem = 'docs/react';
    }

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
          <Menu.Item key="components">
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
          <Col lg={4} md={6} sm={7} xs={24}>
            <Link to="/" id="logo">
              <img alt="logo" src="https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg" />
              <span>Ant Design</span>
            </Link>
          </Col>
          <Col lg={20} md={18} sm={17} xs={0} style={{ display: 'block' }}>
            <div id="search-box">
            </div>
            {menuMode === 'horizontal' ? menu : null}
          </Col>
        </Row>
      </header>
    );
  }
}

export default OrderApp;