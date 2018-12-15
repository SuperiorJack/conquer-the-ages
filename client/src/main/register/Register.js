import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles/index';
import { Card, CardContent, Typography } from '@material-ui/core';
import classNames from 'classnames';
import { FuseAnimate } from '@fuse';
import JWTRegisterTab from './tabs/JWTRegisterTab';

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

class Register extends Component {
    state = {
        tabValue: 0
    };

    handleTabChange = (event, value) => {
        this.setState({ tabValue: value });
    };

    form = React.createRef();

    disableButton = () => {
        this.setState({ canSubmit: false });
    };

    enableButton = () => {
        this.setState({ canSubmit: true });
    };

    componentDidUpdate(prevProps, prevState) {
        if (this.props.login.error && (this.props.login.error.displayName || this.props.login.error.password || this.props.login.error.email)) {
            this.form.updateInputsWithError({
                ...this.props.login.error
            });

            this.props.login.error = null;
            this.disableButton();
        }

        if (this.props.user.role !== 'guest') {
            const pathname = this.props.location.state && this.props.location.state.redirectUrl ? this.props.location.state.redirectUrl : '/';
            this.props.history.push({
                pathname
            });
        }
        return null;
    }

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
                            <Typography variant="h6" className="text-center md:w-full mb-48">CREATE AN ACCOUNT</Typography>

                            <JWTRegisterTab />

                            <div className="flex flex-col items-center justify-center pt-32 pb-24">
                                <span className="font-medium">Already have an account?</span>
                                <Link className="font-medium" to="/login">Login</Link>
                            </div>

                            <div className="flex flex-col items-center">
                            </div>
                        </CardContent>
                    </Card>
                </FuseAnimate>
            </div>
        )
    }
}

function mapStateToProps({ auth }) {
    return {
        login: auth.login,
        user: auth.user
    }
}


export default withStyles(styles, { withTheme: true })(withRouter(connect(mapStateToProps)(Register)));
