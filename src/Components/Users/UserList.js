import React, {Component} from 'react';
import UserItems from './UserItems';

class UserList extends  Component {
    render(){
        return (
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Fecha de nacimiento</th>
                    </tr>
                </thead>
                <tbody>
                {
                    this.props.users.map(item =>

                            <UserItems fistName = {item.fistName}
                                lastName = {item.lastName}
                                birsthDate = {item.birsthDate}
                            />
                    )
                }
                </tbody>
            </table>
        );
    }
}

export  default  UserList;