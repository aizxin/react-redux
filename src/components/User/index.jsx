 'use strict';
import React, { Component } from 'react';

class User extends Component {
  _handleClick () {
    
  }

  render () {
    const { id, name, email} = this.props.user;
    return (
      <tr>
        <th scope="row">{id}</th>
        <td>{name}</td>
        <td>{email}</td>
        <td><button onClick={this._handleClick.bind(this)}>修改</button><button onClick={this._handleClick.bind(this)}>删除</button></td>
    </tr>
    );
  }
}

export default User;