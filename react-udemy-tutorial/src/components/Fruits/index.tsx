import React from 'react';
import { FruitsOwnProps, FruitsProps, FruitsStateProps } from './interface';
import { connect, MapStateToProps } from 'react-redux';

class Fruits extends React.Component<FruitsProps> {
    render() {
        const { ownerName, fruits } = this.props;
        return (
            <div>
                <h1>Owner: { ownerName }</h1>
                <h1>Fruits</h1>
                <ul>
                    {fruits.map((fruit) => <li key={fruit}>{fruit}</li>)}
                </ul>
            </div>
        );
    }
}

const mapStateToProps: MapStateToProps<FruitsStateProps, FruitsOwnProps, string[]> = (state, ownProps) => {
    return {
        fruits: state
    }
}

export default connect(mapStateToProps)(Fruits);