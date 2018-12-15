import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles/index';
import { Card, CardContent, Typography } from '@material-ui/core';
import classNames from 'classnames';
import { FuseAnimate } from '@fuse';
import JWTLoginTab from './tabs/JWTLoginTab';

const styles = theme => ({
    root: {
        background: "url('/assets/img/bg-login" + Math.floor((Math.random() * 10) + 1) + ".jpg') no-repeat",
        backgroundSize: 'cover'
    },
    intro: {
        color: '#ffffff'
    },
    card: {
        width: '100%',
        maxWidth: 400
    }
});

class Login extends Component {
    state = {
        tabValue: 0
    };

    handleTabChange = (event, value) => {
        this.setState({ tabValue: value });
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classNames(classes.root, "flex flex-col flex-1 flex-no-shrink p-24 md:flex-row md:p-0")}>

                <div
                    className={classNames(classes.intro, "flex flex-col flex-no-grow items-center p-16 text-center md:p-128 md:items-start md:flex-no-shrink md:flex-1 md:text-left")}>
                </div>

                <FuseAnimate animation={{ translateX: [0, '100%'] }}>

                    <Card className={classNames(classes.card, "mx-auto m-16 md:m-0")}>

                        <CardContent className="flex flex-col items-center justify-center p-32 md:p-48 md:pt-128 ">
                            <FuseAnimate animation="transition.expandIn" delay={300}>
                                <img className="mb-32" src="assets/img/logoFull.png" alt="logo" />
                            </FuseAnimate>
                            <Typography variant="h6" className="text-center md:w-full mb-48">LOGIN TO YOUR ACCOUNT</Typography>

                            <JWTLoginTab />

                            <div className="flex flex-col items-center justify-center pt-32">
                                <span className="font-medium">Don't have an account?</span>
                                <Link className="font-medium" to="/register">Create an account</Link>
                            </div>

                        </CardContent>
                    </Card>
                </FuseAnimate>
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(withRouter(Login));
