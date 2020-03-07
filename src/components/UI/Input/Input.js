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
                value={props.value}
                onChange={props.changed} />;
            break;
        case ('textarea'):
            inputElement = <textarea
                className={InputElementProp}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ('select'):
            inputElement = (
                <select
                    className={InputElementProp}
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option
                            key={option.value}
                            value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input
                className={InputElementProp}
                {...props.elementConfig}
                value={props.value} 
                onChange={props.changed}/>;
    }

    return (
        <div className={Input}>
            <label className={Label}>{props.label}</label>
            {inputElement}
        </div>
    );
};


export default input;