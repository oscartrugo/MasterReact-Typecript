import React, { ErrorInfo } from 'react';

class SecondComponent extends React.Component {
    render() {
        throw new Error('Planned Error');
        return (
            <React.Fragment>
                <h1>Second Component</h1>
            </React.Fragment>
        )
    }
}

export default SecondComponent;