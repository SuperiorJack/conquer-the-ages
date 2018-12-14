import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as userActions from 'auth/store/actions';
import { bindActionCreators } from 'redux';
import * as Actions from 'store/actions';
import jwtService from 'jwtService';

class Auth extends Component {
    /*eslint-disable-next-line no-useless-constructor*/
    constructor(props) {
        super(props);
        this.jwtCheck();
    }

    jwtCheck = () => {
        jwtService.on('onAutoLogin', () => {

            this.props.showMessage({ message: 'Logging in with JWT' });

            /**
             * Sign in and retrieve user data from Api
             */
            jwtService.signInWithToken()
                .then(user => {
                    this.props.setUserData(
                        {
                            uuid: 'XgbuVEXBU5gtSKdbQRP1Zbbby1i1',
                            from: 'custom-db',
                            password: "admin",
                            role: "admin",
                            data: {
                                'displayName': 'Abbott Keitch',
                                'photoURL': 'assets/images/avatars/Abbott.jpg',
                                'email': 'admin',
                                settings: {
                                    layout: {
                                        style: 'layout1',
                                        config: {
                                            scroll: 'content',
                                            navbar: {
                                                display: true,
                                                folded: true,
                                                position: 'left'
                                            },
                                            toolbar: {
                                                display: true,
                                                style: 'fixed',
                                                position: 'below'
                                            },
                                            footer: {
                                                display: true,
                                                style: 'fixed',
                                                position: 'below'
                                            },
                                            mode: 'fullwidth'
                                        }
                                    },
                                    customScrollbars: true,
                                    theme: {
                                        main: 'defaultDark',
                                        navbar: 'defaultDark',
                                        toolbar: 'defaultDark',
                                        footer: 'defaultDark'
                                    }
                                },
                                shortcuts: [
                                    'calendar',
                                    'mail',
                                    'contacts'
                                ]
                            }
                        }

                    );

                    this.props.showMessage({ message: 'You logged in!' });
                })
                .catch(error => {
                    this.props.showMessage({ message: error });
                })
        });

        jwtService.on('onAutoLogout', (message) => {
            if (message) {
                this.props.showMessage({ message });
            }
            this.props.logout();
        });

        jwtService.init();
    };

    render() {
        const { children } = this.props;

        return (
            <React.Fragment>
                {children}
            </React.Fragment>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        logout: userActions.logoutUser,
        setUserData: userActions.setUserData,
        showMessage: Actions.showMessage,
        hideMessage: Actions.hideMessage
    },
        dispatch);
}

export default connect(null, mapDispatchToProps)(Auth);
