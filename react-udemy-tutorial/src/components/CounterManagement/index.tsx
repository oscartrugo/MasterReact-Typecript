import React from "react";
import { CounterManagementProps, CounterManagementState } from "./interface";
import axios from "axios";
//class component
class CounterManagement extends React.Component<CounterManagementProps, CounterManagementState> {
    constructor(props: CounterManagementProps) {
        super(props);

        this.state = {
            counter: 0, //Propertie
            users: [] //Propertie
        }

        console.log("constructor")
    }
//Creamos las funciones que controlaran el resultado de dar click en los botones
    handleAddClick = () =>{
        this.setState({ counter: this.state.counter + 1})
    }

    handleMinusClick = () =>{
        this.setState({ counter: this.state.counter - 1})
    }

    static getDerivedStateFromProps(props: CounterManagementProps, state: CounterManagementState) {
        console.log('getDerivedStateFromProps');
        //return props.ownerName === 'Oscar' ? { counter: 5 } : null;
        return null;
    }

    clickWindow = () => {
        console.log("clickWindow Event occur")
        this.setState({ counter: this.state.counter + 1 }); //The value of the counter increases 1
    }

    componentDidMount() { //This functions is used to fetch data from the API
        axios.get("https://reqres.in/api/users?page=2")
        .then(response => {
            const data = response.data;

            const users = data.data.map((userData: any) => userData.first_name); //Fetch the name in the API

            this.setState({users})
        })
        window.addEventListener('click', this.clickWindow);
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.clickWindow);
    }


    render() {
        console.log("render")
        const { ownerName } = this.props;
        const {counter, users} = this.state;
        return (
            <div>
                <h1>Counter Management</h1>
                <h2>Owner name: {ownerName}</h2>

                <h3>Counter: {counter} </h3>
                <button onClick={this.handleAddClick}>Add</button>
                <button onClick={this.handleMinusClick}>Minus</button>
                <ul>
                    {users.map(user => <li>{user}</li>)}
                </ul>
            </div>
        )
    }
}

export default CounterManagement;

/**
 * Different ways to set a state
 * 
 * 1. Function (if you want to update the value state from the previous value)
 * 2. Object
 * 
 * Remember HOW IMPORTANT is to use an ARROW FUNCTION in HandleAddClick
 * If you use a standard function the "this" of the function will refer to the button,
 * 
 * But if we use an Arrow Function, thar "this" will actually refer to our counter management component
 *
 * 
 */


/**
 * If you need to fetch data for your UI, you will actually call the API in the componentDidMount, because
 * componentDidMount will only be called once
 */

/**
 * You wil use getDerivedStateFromProps if you want to override the value of state depending on props
 * But you should only use this on rare use cases, because this will make it complex to maintain your
 * component.
 * 
 * And componentDidMount will be called only once when our component mounts.
 * This is the function where we will call our API to get some data and to render to our component.
 */