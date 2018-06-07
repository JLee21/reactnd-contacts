import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MessageHistory from './MessageHistory';
import AddMessage from './AddMessage';

class ChatWindow extends Component {

  handleMessage = message => {
    //The callback is getting called.
    this.props.handleMessage(this.props.user.username, message);
  };


  render() {
    const { user, messages} = this.props;

    return (
      <div className="chat-window">
        <h2>Super Awesome Chat</h2>
        <div className="name sender">{user.username}</div>
        <MessageHistory user={user} messages={messages} />
        <AddMessage handleMessage={this.handleMessage} />
      </div>
    )
  }
}

export default ChatWindow;
