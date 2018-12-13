import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = { messages: null }

  fetchMessages = () => {
    window.fetch('/api/messages')
      .then(response => response.json())
      .then(json => { return (this.setState({ messages: json })) })
      .catch(error => console.log(error));
  }

  signin = () => {
    window.fetch('/login', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({ user: { email: 'mounir2@mounir.com', password: 'test1234' } })
    })
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.log(error));
  }

  signup = () => {
    window.fetch('/signup', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({ user: { email: 'mounir2@mounir.com', password: 'test1234' } })
    })
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.log(error));
  }

  logout = () => {
    window.fetch('/logout', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "DELETE"
    })
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }

  addMessage = event => {
    event.preventDefault();
    console.log(this.refs.addMessageInput.value)
    window.fetch('/api/messages', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({ body: this.refs.addMessageInput.value, user_id: 1 })
    })
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.log(error));
  }

  render() {
    let messages = null;
    if (this.state.messages != null) {
      messages = this.state.messages.map(message => { return (<div key={message.id}>{message.body}</div>) })
    }
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.fetchMessages}>Messages</button>
          <button onClick={this.signup}>SignUp</button>
          <button onClick={this.signin}>SignIn</button>
          <button onClick={this.logout}>Logout</button>
          <form onSubmit={this.addMessage}>
            <input ref="addMessageInput" /><button>ADD</button>
          </form>
          {messages}
          <p>
            Edit <code>src/App.js</code> It work on windows save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
