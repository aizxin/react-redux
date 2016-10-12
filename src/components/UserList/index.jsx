'use strict';
import React, {Component,PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './index.css';
import UserAdd from '../UserAdd';
import User from '../User';
import { getUsers } from '../../actions/user';

class UserList extends Component {
    componentWillMount() {
        this.props.getUsers();
    }
	render() {
        const { users } = this.props
		return (
            <div className="main-container">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12" style={{marginTop: 15}}>
                            <UserAdd/>
                        </div>
                    </div>
                    <div className="bs-example" data-example-id="simple-table">
                        <table className="table">
                        <caption>用户列表</caption>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>用户姓名</th>
                            <th>用户邮箱</th>
                            <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index)=> {
                               return <User user={user} key={user.id}/>
                            })}
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
		);
	}
}
const mapStateToProps = state => {
    return {
        users: state.user.users
    };
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getUsers:getUsers
    },dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(UserList);