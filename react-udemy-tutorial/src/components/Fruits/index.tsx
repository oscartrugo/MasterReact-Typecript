import React from 'react';
import { FruitsDispatchProps, FruitsOwnProps, FruitsProps, FruitsStateProps } from './interface';
import { connect, MapDispatchToPropsFunction, MapStateToProps } from 'react-redux';
import { rootReducer } from '../../reducer/rootReducer';

class Fruits extends React.Component<FruitsProps> {

    clickAddFruits = () => {
        this.props.addFruits([ 'coconut', 'strawberry' ])
    }

    render() {
        console.log('Fruits Render Called');
        const { ownerName, fruits } = this.props;
        return (
            <div>
                <h1>Owner: { ownerName }</h1>
                <h1>Fruits</h1>
                <ul>
                    {fruits.map((fruit) => <li key={fruit}>{fruit}</li>)}
                </ul>
                <button onClick={this.clickAddFruits}> Add Fruits </button>
            </div>
        );
    }
}

const mapStateToProps: MapStateToProps<FruitsStateProps, FruitsOwnProps, ReturnType<typeof rootReducer>> = (state, ownProps) => {
    console.log('Fruits Map State Props Called');
    return {
        fruits: state.fruits
    }
}

const mapDispatchToProps: MapDispatchToPropsFunction<FruitsDispatchProps, FruitsOwnProps> = (dispatch, ownProps) => {
    return {
        addFruits: (fruits) => dispatch({ type: 'ADD_FRUITS', fruits })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Fruits);