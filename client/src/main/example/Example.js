import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {FusePageSimple} from '@fuse';
import ActionCable from 'actioncable';
import axios from 'axios';

const styles = theme => ({
    layoutRoot: {}
});

class Example extends Component {
    state = { text: '' }

    componentDidMount() {
        const access_token = window.localStorage.getItem('jwt_access_token');
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
        new Promise((resolve, reject) => {
            axios.get('api/messages/1',)
                .then(response => {
                console.log("messages", response);
                    if (response.data) {
                        this.setState({ text: response.data.body })
                    }
                    else {
                        reject(response);
                    }
                });
        });
        const cable = ActionCable.createConsumer('cable')
        this.sub = cable.subscriptions.create('MessagesChannel', {
          received: this.handleReceiveNewText
        })
    }

    handleReceiveNewText = ({ text }) => {
        if (text !== this.state.text) {
          this.setState({ text })
        }
    }

    handleChange = e => {
        this.setState({ text: e.target.value })
        this.sub.send({ text: e.target.value, id: 1 })
    }

    render()
    {
        const {classes} = this.props;
        return (
            <FusePageSimple
                classes={{
                    root: classes.layoutRoot
                }}
                header={
                    <div className="p-24"><h4>Header</h4></div>
                }
                contentToolbar={
                    <div className="px-24"><h4>Content Toolbar</h4></div>
                }
                content={
                    <div className="p-24">
                        <h4>Content</h4>
                        <br/>
                        <textarea
                            value={this.state.text}
                            onChange={this.handleChange}
                        />
                    </div>
                }
            />
        )
    }
}

export default withStyles(styles, {withTheme: true})(Example);