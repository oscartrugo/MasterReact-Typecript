import React from 'react';
import { MyContext } from '../../context/MyContext';
import UserInput from '../UserInput';

class HomePage extends React.Component {
    //Consumimos el value del MyContext.Provider del index
    static contextType = MyContext;
    context!: React.ContextType<typeof MyContext>; //Añadimos un type para this.context, el ! significa que este context nunca será null o undefined
    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <ul> {/** Iteramos los distintos usuarios e imprimimos en una lista */}
                    {this.context.users.map(user => <li key={user}>{user}</li> )}
                </ul>
                <button onClick={() => this.context.updateUsers("Raul")}>Add user</button> {/** Añade usuario desde el Home Page */}
                <UserInput/>
            </div>
        )
    }
}

export default HomePage;




// import React from 'react';
// import { MyContext } from '../../context/MyContext';
// import UserInput from '../UserInput';

// class HomePage extends React.Component {
//     static contextType = MyContext;
//     context!: React.ContextType<typeof MyContext>;

//     render() {
//         return (
//             <div>
//                 <h1> Home Page </h1> {/** Header del componente HomePage */}
//                 <ul>
//                     {this.context.users.map(user => <li key={user}>{user}</li>)}
//                 </ul>
//                 <button onClick={() => this.context.updateUser('bella')}>Add User</button>
//                 <UserInput />
//             </div>
//         )
//     }
// }

// export default HomePage;