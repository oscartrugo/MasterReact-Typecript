import React from 'react';
import { Button } from '../Button';
import axios from 'axios';
import { UserDataAPI, UserManagementProps, UserManagementState } from './interface';
import './style.css';
import { hasUserAlreadyFetched } from './utils';

class UsersManagement extends React.Component<UserManagementProps, UserManagementState> {
    constructor(props: UserManagementProps) {
        super(props);

        this.state = {
            users: [],
            currentUserId: 1,
        }
    }

    fetchUser = async () => {
        const { currentUserId, users } = this.state;

        const response = await axios.get(`https://reqres.in/api/users/${currentUserId}`);
        const { data } = response.data as UserDataAPI;

        this.setState({
            users: [
                ...users,
                data
            ]
        });
    }

    componentDidMount() {
        this.fetchUser();
    }

    componentDidUpdate(prevProps: UserManagementProps, prevState: UserManagementState) {
        const { currentUserId, users } = this.state;

        if (prevState.currentUserId !== this.state.currentUserId && !hasUserAlreadyFetched(users, currentUserId)) {
            this.fetchUser();
        }
    }

    handleAddUserId = () => {
        const { currentUserId } = this.state;

        currentUserId < 10 && this.setState({
            currentUserId: currentUserId + 1
        });
    }

    handleMinusUserId = () => {
        const { currentUserId } = this.state;
        
        currentUserId > 1 && this.setState({
            currentUserId: currentUserId - 1,
        });
    }

    renderUsers = () => {
        const { users, currentUserId } = this.state;

        return users.filter(user => user.id <= currentUserId).map(({ avatar, first_name, last_name }) => {
            return (
                <div className="user-details">
                    <img className="user-avatar" src={avatar} />
                    <span>{`${first_name} ${last_name}`}</span>
                </div>
            )
        })
    }

    render() {
        const { currentUserId } = this.state;
        return (
            <div className="users-management-container">
                <h1>Users Management</h1>
                <div className="users-container">
                    {this.renderUsers()}
                </div>
                <p>Number of Users: {currentUserId}</p>
                <div className="options">
                    <Button onClick={this.handleMinusUserId}>Minus</Button>
                    <Button type="primary" onClick={this.handleAddUserId}>Add</Button>
                </div>
            </div>
        )
    }
}

export default UsersManagement;