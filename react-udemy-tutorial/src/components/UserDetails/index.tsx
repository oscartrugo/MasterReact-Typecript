import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

class UserDetails extends React.Component<RouteComponentProps> {
    render() {
        return (
            <div>
                <h1> User Details </h1>
            </div>
        )
    }
}

export default withRouter(UserDetails);