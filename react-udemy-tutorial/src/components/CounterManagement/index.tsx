import React from "react";
import { CounterManagementProps, CounterManagementState } from "./interface";
//class component
class CounterManagement extends React.Component<CounterManagementProps, CounterManagementState> {
    constructor(props: CounterManagementProps) {
        super(props);

        this.state = {
            counter: 0
        }
    }
//Creamos las funciones que controlaran el resultado de dar click en los botones
    handleAddClick = () => {
        this.setState(function(prevState) {
            return {
                counter: prevState.counter + 1
            }
        }, function(){
            console.log("callback function")
        });

        // this.setState(function(prevState) {
        //     return {
        //         counter: prevState.counter + 1
        //     }
        // });

        // this.setState(function(prevState) {
        //     return {
        //         counter: prevState.counter + 1
        //     }
        // });

        // this.setState({ counter: this.state.counter + 1})
        // this.setState({ counter: this.state.counter + 1})
        // this.setState({ counter: this.state.counter + 1}) //Se usa el valor final, no los demás

        //Multiple this.setState willl be batch for better performance, they merge into one
    }

    handleMinusClick = () =>{
        this.setState({ counter: this.state.counter - 1})
    }

    render() {
        console.log("render")
        const { ownerName } = this.props;
        const {counter} = this.state;
        return (
            <div>
                <h1>Counter Management</h1>
                <h2>Owner name: {ownerName}</h2>

                <h3>Counter: {counter} </h3>
                <button onClick={this.handleAddClick}>Add</button>
                <button onClick={this.handleMinusClick}>Minus</button>
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