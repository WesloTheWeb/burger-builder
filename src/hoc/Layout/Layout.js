import React, { Component } from 'react';
import { connect } from 'react-redux';

import Auxillary from '../Auxillary/Auxillary';
import classes from './layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    }


    render() {
        return (
            <Auxillary>
                <Toolbar
                    isAuth={this.props.isAuthenticated}
                    drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer
                    isAuth={this.props.isAuthenticated}
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
                <main className={classes.Layout}>
                    {this.props.children}
                </main>
            </Auxillary>
        );
    }
}

// Connecting to a redux state. We can pass this state to a prop.
const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
}


export default connect(mapStateToProps)(Layout);