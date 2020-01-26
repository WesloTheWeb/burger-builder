import React from 'react';
import Auxillary from '../../hoc/Auxillary';
import classes from './layout.module.css';

const layout = ( props ) => (
    <Auxillary>
        <div>Toolbar, Sidedrawer, Backdrop</div>
        <main className={classes.Layout}>
            {props.children}
        </main>
    </Auxillary>
);

export default layout;