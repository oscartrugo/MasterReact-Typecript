import React from 'react';
import MyReactMemo from '../MyReactMemo';
import { MyPureComponentProps, MyPureComponentState } from './interface';

class MyPureComponent extends React.PureComponent<MyPureComponentProps, MyPureComponentState> {
    constructor(props: MyPureComponentProps) {
        super(props);

        this.state = {
            name: 'Oscar',
            address: {
                city: 'MyCity',
                state: 'MyState',
            }
        }
    }

    handleSetState = () => {
        const newAddress = {
            city: "newCity",
            state: "MyState"
        }

        
        this.setState({
            address: newAddress
        });

    

        // Object example
        // const newAddress = {
        //     city: 'MyCity',
        //     state: 'MyState',
        // };

        // this.setState({
        //     address: newAddress
        // })
    }

    render() {
        const { name, address } = this.state;

        return (
            <>
                <h1> Pure Component </h1>
                <MyReactMemo name={name} address={address}/>
                {/* <MyReactMemo name={name} address={address} /> */}
                <button onClick={this.handleSetState}>Set State</button>
            </>
        )
    }
}

export default MyPureComponent;