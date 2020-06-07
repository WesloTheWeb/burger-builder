import React from 'react'; 
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/">Burger Builder</NavigationItem>
<<<<<<< HEAD
<<<<<<< HEAD
=======
        <NavigationItem link="/Orders">Orders</NavigationItem>
>>>>>>> parent of 95cec20... quick fixes
        {props.isAuthenticated ? <NavigationItem link="/orders">Orders</NavigationItem> : null }
=======
        <NavigationItem link="/Orders">Orders</NavigationItem>
>>>>>>> parent of b1a8642... Authentication tokens
        {!props.isAuthenticated 
            ? <NavigationItem link="/Auth">Authenticate</NavigationItem>
            : <NavigationItem link="/logout">Logout</NavigationItem>
        }
 
     </ul>
);
// If it isAuthenticated is equal to null logout, if not, log in.




export default navigationItems;