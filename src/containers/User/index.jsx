'use strict';
import React, { Component,PropTypes } from 'react';

import { UserList } from '../../components';

class User extends Component {

  render() {
      return (
          <div>
        	   <UserList />
        </div>
      );
  }
}


export default User;