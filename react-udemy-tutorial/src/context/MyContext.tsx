import React from "react";

export interface MyContextType {
    users: string[];
    updateUsers(user: string): any; //Función para actualizar usuarios

}
//const es el context pero adaptado para exportar, es el type que creamos en la linea anterior.
//Este conext en realidad es un objeto, asi que cuando usamos React.createContext, 
//retorna un objeto que contiene un proveedor y un consumidor
//provider proveera el valor y consumer consumirá el valor
export const MyContext = React.createContext<MyContextType>({
    users: ["Oscar", "Diana"], //usuarios
    updateUsers: () => { }
}); //pasamos el tipo y le agregamos un valor por default

interface MyContextProviderState {
    users: string[];
}


export class MyContextProvider extends React.Component<{}, MyContextProviderState>{ //Pasamos los usuarios y actualizamos sus valores aquí
    constructor(props: {}) {
        super(props);

        this.state = {
            users: ['Oscar', 'Diana']
        }
    }

    //Función para actualizar el value de nuestros usuarios
    handleUpdateUser = (user: string) => {
        this.setState({
            users: [...this.state.users, user] //Al arreglo le añadimos el nuevo user
        });
    }

    render() {
        return (
            <MyContext.Provider value={{
                users: this.state.users,
                updateUsers: this.handleUpdateUser
            }}>
                {/** Este component envuelve todos nuestros components que se necesitan para suscribir a MyContext */}
                {this.props.children}
                {/** El context contendrá otra información para usuarios y una función para actualizar el valor de nuestros usuarios */}
            </MyContext.Provider>
        )
    }
}








// import React from 'react';

// export interface MyContextType {
//     users: string[];
//     updateUser(user: string): any;
// }

// export const MyContext = React.createContext<MyContextType>({ //Creamos un contexto que contenga el tema de la app
//     users: ['Rysh', 'May'],
//     updateUser:() => {}
// });

// interface MyContextProviderState {
//     users: string[];
// }

// export class MyContextProvider extends React.Component<{}, MyContextProviderState> {
//     constructor(props: {}) {
//         super(props);

//         this.state = {
//             users: ['Rysh', 'May']
//         }
//     }

//     handleUpdateUser = (user: string) => {
//         this.setState({
//             users: [ ...this.state.users, user ]
//         });
//     }

//     render() {
//         return (
//             <MyContext.Provider value={{
//                 users: this.state.users,
//                 updateUser: this.handleUpdateUser
//             }}>
//                 {this.props.children}
//             </MyContext.Provider>
//         )
//     }
// }