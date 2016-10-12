'use strict';
import React, { Component } from 'react';
import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';
import { Select, Menu, Row, Col, Icon, Button, Popover } from 'antd';
import enquire from 'enquire.js';
import classNames from 'classnames';
import './header.less'
class OrderApp extends Component {
    constructor(props) {
        super(props);

        this.onDocumentClick = (e) => {
          if (document.querySelector('#header .nav').contains(e.target)) {
            return;
          }
          this.setState({
            menuVisible: false,
          });
        };

        this.state = {
          menuVisible: false,
          menuMode: 'horizontal',
          isFirstFrame: true,
        };
      }

      componentDidMount() {
        window.addEventListener('scroll', this.onScroll);
        document.addEventListener('click', this.onDocumentClick);
        document.addEventListener('touchstart', this.onDocumentClick);
        enquire.register('only screen and (min-width: 320Px) and (max-width: 767Px)', {
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
        document.removeEventListener('click', this.onDocumentClick);
        document.removeEventListener('touchstart', this.onDocumentClick);
      }
      render() {
        const { location } = this.props;
        const module = location.pathname.split('/').slice(0, -1).join('/');
        let activeMenuItem = module || 'home';

        if (activeMenuItem === 'components' || activeMenuItem === 'docs/pattern' || location.pathname === 'changelog') {
          activeMenuItem = 'components';
        }

        const headerClassName = classNames({
          clearfix: true,
          'home-nav-white': !this.state.isFirstFrame,
        });

        return (
          <header id="header" className={headerClassName}>
            <Row>
              <Col lg={5} md={6} sm={7} xs={24}>
                <Icon
                  className="nav-phone-icon"
                  type="menu"
                />
                <Link to="/" id="logo">
                  <img alt="logo" src="https://zos.alipayobjects.com/rmsportal/wIjMDnsrDoPPcIV.png" />
                  <span>ANT DESIGN | MOBILE</span>
                </Link>
              </Col>
              <Col className={`nav ${this.state.menuVisible ? 'nav-show' : ''}`}
                lg={19} md={18} sm={17} xs={0} style={{ display: 'block' }}
              >
                <Menu mode={this.state.menuMode} selectedKeys={[activeMenuItem]} id="nav">
                  <Menu.Item key="home">
                    <Link to="/">
                      首页
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="components">
                    <Link to="/user">
                      组件
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="docs/pattern">
                    <Link to="/docs/pattern/color">
                      设计基础
                    </Link>
                  </Menu.Item>
                </Menu>
              </Col>
            </Row>
          </header>
        );
    }
}

export default OrderApp;