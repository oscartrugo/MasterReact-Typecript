import React from "react";
import { ButtonProps } from "./interface";
import './style.css';

export const Button: React.FC<ButtonProps> = ({ type="default", children}) => { //Esta funcion es un functional component
    const className = type === 'primary' ? 'primary' : '';
    return (
        <button className={className}>{children}</button>
    )
}