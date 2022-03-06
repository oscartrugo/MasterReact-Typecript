import React from 'react';
import { MyContext } from '../../context/MyContext';


{/** Utilizamos .Consumer puesto que acepta un hijo que es una función en la cual
 el primer parámetro es el valor del context */}
class UserInput extends React.Component {
    render() {
        return (

            <MyContext.Consumer>
                {(value) => (
                    <div>
                        <h1> User Input </h1>
                        <ul>
                            {value.users.map(user => <li key={user}>{user}</li>)}
                        </ul>
                        <button onClick={() => value.updateUsers('Prince')}>Add User</button>
                    </div>
                )}
            </MyContext.Consumer>
        )
    }
}

export default UserInput;