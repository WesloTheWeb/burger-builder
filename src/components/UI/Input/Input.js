import React from 'react';
import classes from './Input.module.css';

const { Input, InputElementProp, Label } = classes;

const input = (props) => {
    let inputElement = null;

    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                className={InputElementProp}
                {...props.elementConfig}
                value={props.value} />;
            break;
        case ('textarea'):
            inputElement = <textarea
                className={InputElementProp}
                {...props.elementConfig}
                value={props.value} />;
            break;
        default:
            inputElement = <input
                className={InputElementProp}
                {...props.elementConfig}
                value={props.value} />;
    }

    return (
        <div className={Input}>
            <label className={Label}>{props.label}</label>
            {inputElement}
        </div>
    );
};


export default input;