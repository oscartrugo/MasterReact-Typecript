import React from 'react';
import Fruits from '../Fruits';

class AboutPage extends React.Component {
    render() {
        return (
            <div>
                <h1>About Page</h1>
                <Fruits ownerName="Rysh" />
            </div>
        );
    }
}

export default AboutPage;