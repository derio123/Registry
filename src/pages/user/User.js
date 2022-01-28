import React, { Component } from 'react'
import UserForm from './UserForm';

class User extends Component {

    render() {
        let list = [{
            id: 1,
            nome: "Derio",
            email: "deriomatheus6@gmail.com"
        },
        {
            id: 2,
            nome: "Joana",
            email: "jjaona76@gmail.com"
        }
        ];
        return (

            <div className="App">
                <UserForm></UserForm>
                <table border="1">
                    <thead>
                        <tr>
                            <th>
                                Nome
                            </th>
                            <th>
                                Email
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((item) => {
                            return (<tr key={item.id}>
                                <td >{item.nome}</td>
                                <td>{item.email}</td>
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default User;