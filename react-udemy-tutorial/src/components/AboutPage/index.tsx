import React from 'react';
import UserDetails from '../UserDetails';

class AboutPage extends React.Component {
    render() {
        return (
            <div>
                <h1> About Page </h1>
                <p>Hola desde About Page component</p>
                <UserDetails />
            </div>
        )
    }
}

export default AboutPage;