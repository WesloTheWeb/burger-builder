import React from 'react';
import classes from './BuildControl.module.css';

// This is the component for buildControl and will be rendered. Able to map it.
const buildControl = (props) => {
    // CSS Classes
    const { BuildControl, Less, More, Label } = classes;

    return (
        <div className={BuildControl}>
            <div className={Label}>{props.label}</div>
            <button className={Less}
                onClick={props.removed}
                disabled={props.disabled}>Less</button>
            <button className={More}
                onClick={props.added}>More</button>
        </div>
    )

};

export default buildControl;