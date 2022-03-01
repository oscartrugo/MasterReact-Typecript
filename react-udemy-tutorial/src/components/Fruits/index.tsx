import React from 'react';
import { FruitsProps, FruitsState } from './interface';

class Fruits extends React.Component<FruitsProps, FruitsState> {
    constructor(props: FruitsProps) {
        super(props);

        this.state = {
            fruits: ['apple', 'coconut'], //valores iniciales de nuestras frutas
            newFruit: '',
        }
    }

    handleInputOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            newFruit: event.currentTarget.value
        })
    }

    handleAddButtonClick = () => {
        this.setState({
            fruits: [ ...this.state.fruits, this.state.newFruit ] //Añadimos la nueva fruta al array existente
        })
    }

    render() {
        const { fruits, newFruit } = this.state; //Obtenemos las fruits en el render

        const fruitsUI = fruits.map(fruit => { //Iteramos el arreglo de frutas
            return <li key={fruit}>{fruit}</li> //Añadimos la fruta dentro del elemento "li", 
        });                                        //para poder cargarlo dentro de un "ul"
        //Añadimos "fruit" como key porque vamos a tener una fruta única

        return (
            <div>
                <h1> Fruits </h1>
                <ul> 
                    {fruitsUI} {/* Aqui se cargan las fruitas ingresadas al inicio del render */}
                </ul>

                <input value={newFruit} onChange={this.handleInputOnChange} />
                <button onClick={this.handleAddButtonClick}>Add Fruit</button>
            </div>
        )
    }
}

export default Fruits;