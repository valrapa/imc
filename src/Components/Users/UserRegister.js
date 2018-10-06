import React, { Component} from 'react';
import UserForm from './UserForm';
import UserList from './UserList';

class UserRegister extends Component {
    state = {
        users:[
            {
                key: 0,
                fistName: '',
                lastName: '',
                birsthDate: ''
            }
        ]
    }
    handlerChangeForm = (data)=>{
        user = {
            fistName: data.fistName,
            lastName: data.lastName,
            birsthDate:data.birsthDate
        };
        this.setState("users": [{...state.users},user]);
    }

    render() {
        return (
            <div>
                <UserForm onSubmit={this.handlerChangeForm}></UserForm>
                <UserList users={this.state.users}></UserList>
            </div>
        );
    }
}

export default  UserRegister;