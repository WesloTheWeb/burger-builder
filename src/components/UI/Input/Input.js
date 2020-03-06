import React from 'react';
import classes from './Input.module.css';

const { Input, InputElementProp, Label } = classes;

const input = (props) => {
    let inputElement = null;

    switch (props.inputtype) {
        case ('input'):
            inputElement = <input className={InputElementProp} {...props} />;
            break;
        case ('textarea'):
            inputElement = <textarea className={InputElementProp} {...props} />;
            break;
        default:
            inputElement = <input className={InputElementProp} {...props} />;
    }

    return (
        <div className={Input}>
            <label className={Label}>{props.label}</label>
            {inputElement}
        </div>
    );
};


export default input;