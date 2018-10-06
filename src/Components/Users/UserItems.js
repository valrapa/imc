import React from 'react';

function UserItems(props) {
    return (
            <tr>
                <td>{props.fistName}</td>
                <td>{props.lastName}</td>
                <td>{props.birsthDate}</td>
            </tr>
    )
}

export  default  UserItems;