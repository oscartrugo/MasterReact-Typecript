import React from "react";
import { CounterManagementProps, CounterManagementState, UserDataAPI } from "./interface";
import axios from "axios";
//class component
class CounterManagement extends React.Component<CounterManagementProps, CounterManagementState> {
    constructor(props: CounterManagementProps) {
        super(props);

        this.state = {
            user: 1, //Propertie
            userData: {
                id: 1,
                email: '',
                first_name: '',
                last_name: '',
                avatar: ''
            }
        }

        console.log("constructor")
    }
//Creamos las funciones que controlaran el resultado de dar click en los botones
    handleAddClick = () =>{
        this.setState({ user: this.state.user + 1}) //, () => this.fetchUserData
    }

    handleMinusClick = () =>{
        this.setState({ user: this.state.user - 1})

    }

    // static getDerivedStateFromProps(props: CounterManagementProps, state: CounterManagementState) {
    //     console.log('getDerivedStateFromProps');

    //     return null;
    // }

    // shouldComponentUpdate(nextProps: CounterManagementProps, nextState: CounterManagementState) {
    //     console.log('shouldComponentUpdate');

    //     return true
    //     //return this.state.counter < 5; //Después de 5, la UI no se actualiza.
    // }
    // //this will return the data you need before React updates the DOM itself
    // getSnapshotBeforeUpdate(prevProps: CounterManagementProps, prevState: CounterManagementState) {
    //     console.log('getSnapshotBeforeUpdate');

    //     return { scrollPosition: '152px' };
    // }

    fetchUserData = () => {
        axios.get(`https://reqres.in/api/users/${this.state.user}`)
            .then(response => {
                const userDataAPI = response.data as UserDataAPI;

                this.setState({
                    userData: userDataAPI.data
                })
            });
    }

    componentDidMount(){
        this.fetchUserData();
    }

    componentDidUpdate(prevProps: CounterManagementProps, prevState: CounterManagementState, snapshot: any) {
        if(prevState.user !== this.state.user){ //Si el estado anterior del user no es igual al estado de este usuario, hace fetch
            this.fetchUserData();
        }
    }

    // componentDidMount() {
    //     this.fetchUserData();
    // }


    render() {
        console.log("render")
        const { ownerName } = this.props;
        const { user, userData } = this.state;
        const {first_name} = userData;
        return (
            <div>
                <h1>Counter Management</h1>
                <h2>Owner name: {ownerName}</h2>
                <h3>UserID: {user} </h3>
                <h3>{first_name}</h3>
                <button onClick={this.handleAddClick}>Add</button>
                <button onClick={this.handleMinusClick}>Minus</button>
            </div>
        )
    }
}

export default CounterManagement;