import React from 'react';
import classes from './BuildControls.module.css';

import BuildControl from './BuildControl/BuildControl';
 
/*Macro, in charge of the console of controls
- Our controls is an array that contains object that we will pass off as property inside our
BuildControl component. 
- const controls will determine the quanity and type i.e Salad Bacon Cheese as an options. If want
to add more labels simply edit the array and add a new object. It is rendered dynamically.
*/
const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];


/* 
buildControls will use the map to loop through our control varaiable and "give" it to our BuildControl. Make sure
the BuildControl is receiving props.
*/
const buildControls = (props) => (
    <div className={classes.BuildControls}>
        {controls.map(ctrl => (
            <BuildControl key={ctrl.label} label={ctrl.label} />
        ))}
    </div>
);

export default buildControls;