import React from 'react';
import classes from './Input.module.css';

const { Input, Label, Invalid, errorMsg } = classes;

const input = (props) => {
    let inputElement = null;
    const inputClasses = [classes.InputElement];

    let validationError = null;
    // If its invalid and is currently "touched"
    if (props.invalid && props.touched) {
        validationError = <p className={errorMsg}>Please enter {props.shouldValidate.validationText}!</p>;
        /* This checks the shouldValidate and the validation Text property
        Remember shouldValidate refers to formElement.config.validation in contactData.js
        */
    }

    // Dynamic styling to check if invalid and if touched
    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(Invalid);
    }

    // Switch case for our input. Deals with each type of form i.e input, textarea and select.
    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ('textarea'):
            inputElement = <textarea
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ('select'):
            inputElement = (
                <select
                    className={inputClasses.join(' ')}
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
    }

    return (
        <div className={Input}>
            <label className={Label}>{props.label}</label>
            {inputElement}
            {validationError}
        </div>
    );
};


export default input;