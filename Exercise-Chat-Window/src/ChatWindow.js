import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChatWindow extends Component {

  const { user, messages , handleMessage} = this.props

  render() {
    <div className="chat-window">
      <h2>Super Awesome Chat</h2>
      <div className="name sender">{user.username}</div>
      <MessageHistory user={user} messages={messages}/>
      <AddMessage user={user} handleMessage={handleMessage}/>
    </div>
  }
}
