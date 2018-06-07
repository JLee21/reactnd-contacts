import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MessageHistory extends Component {

  const { user, messages } = this.props

  render () {
    <ul className="message-list">
      {messages.map((message, index) => (
        <li
          key={index}
          className={
            message.username === user.username
            ? 'message sender' : 'message recipient'
          }
        >
          <p>{`${message.username}: ${message.text}`}</p>
        </li>
      ))}
    </ul>
  }
}
export default MessageHistory
