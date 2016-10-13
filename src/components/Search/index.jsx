'use strict';
import React, { Component } from 'react';
import { Input, Icon, Button, Modal } from 'antd';
import classNames from 'classnames';
const InputGroup = Input.Group;
import './index.css';
class Search extends Component {
    constructor() {
      super();
      this.state = {
        value: '',
        focus: false,
        visible: false,
      };
    }
  handleSearchClick (e) {
    this.setState({
      visible: true,
    });
  }
  handleCancel(e) {
    this.setState({
      visible: false,
    });
  }
  render() {
    const btnCls = classNames({
      'ant-search-btn': true,
      'ant-search-btn-noempty': !!this.state.value.trim(),
    });
    const searchCls = classNames({
      'ant-search-input': true,
      'ant-search-input-focus': this.state.focus,
    });
    return (
        <div>
            <div id="search-box" onClick={this.handleSearchClick.bind(this)}>
              <Icon type="search"/>
            </div>
            <Modal visible={this.state.visible} onCancel={this.handleCancel.bind(this)}>
              <div className="ant-search-input-wrapper">
                <InputGroup className={searchCls}>
                  <Input placeholder="请输入要查询"/>
                  <div className="ant-input-group-wrap">
                    <Button icon="search" className={btnCls} />
                  </div>
                </InputGroup>
              </div>
            </Modal>
        </div>
    );
  }
}
export default Search;