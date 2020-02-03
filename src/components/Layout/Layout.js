import React from 'react';
import Auxillary from '../../hoc/Auxillary';
import classes from './layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = ( props ) => (
    <Auxillary>
        <Toolbar />
        <SideDrawer />
        <main className={classes.Layout}>
            {props.children}
        </main>
    </Auxillary>
);

export default layout;