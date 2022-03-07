import React from 'react';
import Profile from '../Profile';
import ReactDOM from 'react-dom';

class HomePage extends React.Component {
    profileRef: React.RefObject<Profile> = React.createRef(); //Creamos el ref

    componentDidMount() {
        console.log(ReactDOM.findDOMNode(this.profileRef.current)); //Imprimimos el findDOMNode pasando en él el ref
    }

    render() {
        return (
            <div>
                <h1> Home Page </h1>
                <Profile ref={this.profileRef} /> {/**Implementamos el ref en el componente Profile */}
            </div>
        )
    }
}

export default HomePage;