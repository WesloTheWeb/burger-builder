import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.module.css';

const {checkout, CheckoutSummaryProperties} = classes;

const CheckoutSummary = (props) => {
    return (
        <div className={CheckoutSummaryProperties}>
            <h1> We hope it tastes well! :)</h1>
            <div className={checkout}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button
                btnType="Danger"
                clicked={props.checkoutCancelled}>Go back</Button>
            <Button
                btnType="Success"
                clicked={props.checkoutContinued}>CONTINUE</Button>

        </div>
    );
};


export default CheckoutSummary;