import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.module.css';
import axios from '../../../axios-orders';
import Input from '../../../components/UI/Input/Input';


class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP Code'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5
                },
                valid: false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-mail'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'}
                    ]
                },
                value: ''
            }
        },
        loading: false
    }

    checkValidation(value, rules) {
        let isValid = true;

        /* isValid is updated to true or false depending on the check:
        so this is saying if rules.required is true (from our object above)
        then the isValid variable is updated to true or false,
        depending on if the trim value is UNEQUAL to an EMPTY STRINGg.
        
        If it is true (not equal to empty string), isValid will be true*/
        if ( rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }

        return isValid; // returns true or false
    }

    orderHandler = (event) => {
        // Use prevent default to prevent reloading the page!
        event.preventDefault();
        this.setState({ loading: true });
        const formData = {};
        for ( let formElementIdentifier in this.state.orderForm) {
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
            // This creates key value pairs. I.e property Name = to the value user enter.
        }
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            orderData: formData
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

    inputChangedHandler = (event, inputIdentifier) => {
        // Start of our 2 way Binding

        // Step 1: create clone of state
        const updatedOrderForm = {
            ...this.state.orderForm
        }

        // Step 2:
        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier] 
        };

        /* Step 3: Implement our event.target.value for 2-way binding. */
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidation(updatedFormElement.value, updatedFormElement.validation ) 
        console.log(updatedFormElement);
        // This passes in our value (true / false) and our valiidation rules
        updatedOrderForm[inputIdentifier] = updatedFormElement;

        // Step 4: Finally set the state equal to our new state
        this.setState({orderForm: updatedOrderForm});
    }

    render() {
        /* This creates an empty array in which gets iterated through our orderForm object. 
        Values in our orderForm object in key-value pairs will be pushed into a new array, formElementsArray
        This step "converts" our object into an array, which we can loop through with .map().
        
        Also remember that the config is everything to the right of the key identifier from orderForms*/
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }

        let form = (
            <form onSubmit={this.orderHandler}> 
                 {formElementsArray.map(formElement => (
                     <Input 
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                 ))}   
                <Button btnType="Success">Order</Button>
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