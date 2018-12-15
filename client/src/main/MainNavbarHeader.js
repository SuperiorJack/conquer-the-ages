import React from 'react';
import { withStyles } from '@material-ui/core/styles/index';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';

const styles = theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        '& .logo-text, & .react-badge': {
            transition: theme.transitions.create('opacity', {
                duration: theme.transitions.duration.shortest,
                easing: theme.transitions.easing.easeInOut
            })
        }
    },
    logo: {},
    logoIcon: {
        width: 24,
        height: 24,
        transition: theme.transitions.create(['width', 'height'], {
            duration: theme.transitions.duration.shortest,
            easing: theme.transitions.easing.easeInOut
        })
    }
});

function MainNavbarHeader({ classes }) {
    return (
        <div className={classes.root}>
            <div className={classNames(classes.logo, "flex items-center")}>
                <img className={classNames(classes.logoIcon, "logo-icon")} src="assets/img/empty.png" alt="logo" />
            </div>
        </div>
    );
};

export default withStyles(styles, { withTheme: true })(withRouter(MainNavbarHeader));
