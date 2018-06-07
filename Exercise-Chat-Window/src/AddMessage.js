import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMessage extends Component {

  state = {
    message: '',
  }

  onSubmitMessage = event => {
    event.preventDefault();
    this.props.handleMessage(this.state.message)
  }

  onInputChange = event => {
    const { value } = event.target
    this.setState(() => ({
      message: value,
    }));
  }

  isDisabled = () => {
    return this.state.message === '';
  };

  render () {
    const { message } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmitMessage} className="input-group">
          <input
            type="text"
            value={message}
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
    )
  }
}


export default AddMessage
