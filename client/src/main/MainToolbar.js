import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles/index';
import classNames from 'classnames';
import { Avatar, Button, Icon, IconButton, ListItemIcon, ListItemText, Popover, MenuItem, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import * as authActions from 'auth/store/actions';
import * as chatPanelActions from 'main/chatPanel/store/actions';
import { bindActionCreators } from 'redux';
import { FuseAnimate } from '@fuse';
import { Link } from 'react-router-dom';

import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';

const styles = theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        width: '100%'
    },
    seperator: {
        width: 1,
        height: 64,
        backgroundColor: theme.palette.divider
    }
});

class MainToolbar extends Component {
    state = {
        userMenu: null
    };

    userMenuClick = event => {
        this.setState({ userMenu: event.currentTarget });
    };

    userMenuClose = () => {
        this.setState({ userMenu: null });
    };
    render() {
        const { classes, user, logout } = this.props;
        const { userMenu } = this.state;

        return (
            <div className={classNames(classes.root, "flex flex-row")}>

                <div className="flex flex-1 px-24">
                    <Typography>Ressources</Typography>
                </div>


                <Popover
                    open={Boolean(userMenu)}
                    anchorEl={userMenu}
                    onClose={this.userMenuClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center'
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center'
                    }}
                    classes={{
                        paper: "py-8"
                    }}
                >

                    <MenuItem component={Link} to="/pages/profile" onClick={this.userMenuClose}>
                        <ListItemIcon>
                            <Icon>account_circle</Icon>
                        </ListItemIcon>
                        <ListItemText className="pl-0" primary="My Profile" />
                    </MenuItem>
                    <MenuItem component={Link} to="/apps/mail" onClick={this.userMenuClose}>
                        <ListItemIcon>
                            <Icon>mail</Icon>
                        </ListItemIcon>
                        <ListItemText className="pl-0" primary="Inbox" />
                    </MenuItem>
                    <MenuItem
                        onClick={() => {
                            logout();
                            this.userMenuClose();
                        }}
                    >
                        <ListItemIcon>
                            <Icon>exit_to_app</Icon>
                        </ListItemIcon>
                        <ListItemText className="pl-0" primary="Logout" />
                    </MenuItem>
                </Popover>
                <MenuItem>
                    <IconButton color="inherit">
                        <Badge badgeContent={11} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <p>Notifications</p>
                </MenuItem>
                <FuseAnimate delay={300}>
                    <Button className="h-64" onClick={this.userMenuClick}>
                        {user.data.photo_url ?
                            (
                                <Avatar className="" alt="user photo" src={user.data.photo_url} />
                            )
                            :
                            (
                                <Avatar className="">
                                    {user.data.username}
                                </Avatar>
                            )
                        }

                        <div className="hidden md:flex flex-col ml-12 items-start">
                            <Typography component="span" className="normal-case font-600 flex">
                                {user.data.username}
                            </Typography>
                            <Typography className="text-11 capitalize" color="textSecondary">
                                {user.role}
                            </Typography>
                        </div>

                        <Icon className="text-16 ml-12 hidden sm:flex" variant="action">keyboard_arrow_down</Icon>
                    </Button>
                </FuseAnimate>
            </div>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        logout: authActions.logoutUser,
        openChatPanel: chatPanelActions.openChatPanel
    }, dispatch);
}


function mapStateToProps({ auth }) {
    return {
        user: auth.user
    }
}

export default withStyles(styles, { withTheme: true })(connect(mapStateToProps, mapDispatchToProps)(MainToolbar));
