import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

class UserDetails extends React.Component<RouteComponentProps> {
    render() {
        return (
            <div>
                <h1> User Details </h1>
                <p>Hola desde User Details component</p>
            </div>
        )
    }
}

export default withRouter(UserDetails);