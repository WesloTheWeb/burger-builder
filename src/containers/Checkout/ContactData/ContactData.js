import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.module.css';
import axios from '../../../axios-orders';


const { Input } = classes;

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Wesley Webster',
                address: {
                    street: 'Sesame Street 123',
                    zipCode: '12345',
                    country: 'Germany'
                },
                email: 'uwu@owo.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false });
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({ loading: false });
            });
    }

    render() {
        let form = (
            <form>
                <input className={Input} type="text" name="name" placeholder="Your Bame" />
                <input className={Input} type="email" name="email" placeholder="Your email" />
                <input className={Input} type="text" name="street" placeholder="Street" />
                <input className={Input} type="text" name="postal" placeholder="Postal Code" />
                <Button btnType="Success"
                    clicked={this.orderHandler}>Order</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />;
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact Data</h4>
                {form}
            </div>
        );
    }
};


export default withRouter(ContactData);