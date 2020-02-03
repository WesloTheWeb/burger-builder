import React from 'react';
import Auxillary from '../../hoc/Auxillary';
import classes from './layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = ( props ) => (
    <Auxillary>
        <Toolbar />
        <main className={classes.Layout}>
            {props.children}
        </main>
    </Auxillary>
);

export default layout;