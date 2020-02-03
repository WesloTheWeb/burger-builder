import React from 'react';
import Auxillary from '../../../hoc/Auxillary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (<li key={igKey} >
                <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
            </li>
            );
        });

    return (
        <Auxillary>
            <h3> Your Oder</h3>
            <p> A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Your Total Price comes down to: <span style={{fontSize: '24px' }}>${props.price.toFixed(2)}</span></strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCanceled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinue} >CONTINUE</Button>
        </Auxillary>
    )

};



export default orderSummary;