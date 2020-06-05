import React from 'react'; 
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/">Burger Builder</NavigationItem>
        <NavigationItem link="/Orders">Orders</NavigationItem>
        {!props.isAuthenticated 
            ? <NavigationItem link="/Auth">Authenticate</NavigationItem>
            : <NavigationItem link="/logout">Logout</NavigationItem>
        }
 
     </ul>
);
// If it isAuthenticated is equal to null logout, if not, log in.




export default navigationItems;