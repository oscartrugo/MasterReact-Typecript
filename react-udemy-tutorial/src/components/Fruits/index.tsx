import React from 'react';
import { FruitsDispatchProps, FruitsOwnProps, FruitsProps, FruitsStateProps } from './interface';
import { connect, MapDispatchToPropsFunction, MapStateToProps } from 'react-redux';
import { rootReducer, StoreStateStype } from '../../store/reducer/rootReducer';
import FruitsActions from '../../store/action/fruitsAction';
import { CustomDispatch } from '../../store/middlewares/customMiddleware';
import { FruitsReducerAction, fruitsWithO } from '../../store/reducer/fruitsReducer';

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
        fruits: fruitsWithO(state)
    }
}

const mapDispatchToProps = (dispatch: CustomDispatch<StoreStateStype, FruitsReducerAction>, ownProps: FruitsOwnProps): FruitsDispatchProps => {
    const fruitsAction = new FruitsActions();
    return {
        addFruits: (fruits) => dispatch(fruitsAction.addFruits(fruits))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Fruits);