import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';

const { Input } = classes;

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    }

    render() {
        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact Data</h4>
                <form>
                    <input className={Input} type="text" name="name" placeholder="Your Bame" />
                    <input className={Input} type="email" name="email" placeholder="Your email" />
                    <input className={Input} type="text" name="street" placeholder="Street" />
                    <input className={Input} type="text" name="postal" placeholder="Postal Code" />
                    <Button btnType="Success">Order</Button>
                </form>
            </div>
        );
    }
};


export default ContactData;