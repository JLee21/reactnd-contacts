import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMessage extends Component {

  const { user, handleMessage } = this.props

  state = {
    message: ''
  }

  onSubmitMessage = event => {
    event.preventDefault();
    const { user, text } = event.target
    handleMessage(this.state.message)
  }

  onInputChange = event => {
    this.setState(() => (
      message: event.target.value.trim()
    ))
  }

  isDisabled = () => {
    return this.state.message === '';
  };

  render () {
    <div>
      <form className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter your message..."
          onChange={this.onInputChange}
        />
        <div className="input-group-append">
          <button className="btn submit-button" disabled={this.isDisabled()}>
            SEND
          </button>
        </div>
      </form>
    </div>
  }
}


export default AddMessage
