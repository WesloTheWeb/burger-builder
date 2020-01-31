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
    { label: 'Lettuce', type: 'lettuce' },
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
        <p> Current Price: <strong>${props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={ () => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
                />
        ))}
    </div>
);

export default buildControls;