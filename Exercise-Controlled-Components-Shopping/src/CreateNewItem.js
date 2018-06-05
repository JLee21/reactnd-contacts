import React, { Component } from 'react'
import PropTypes from 'prop-types';

// This component holds state so make it a Controlled Component.
// It nevers needs to hold the List of Items. Just pass a new Item
// to this.onAddItem

class CreateNewItem extends Component {

  state = {
    value: '',
  }

  clearState = () => this.setState({ value: '' });

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  addItem = event => {
    event.preventDefault();
    console.log(`Adding ${this.state.value}`);
    this.props.onAddItem(this.state.value)
    this.clearState();
  };

  inputIsEmpty = () => {
    return this.state.value === '';
  };

  // Return JSX
  render() {
    return (
      <form onSubmit={this.addItem}>
        <input
          type="text"
          placeholder="Enter New Item"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button disabled={this.inputIsEmpty()}>Add</button>
      </form>
    )
  }
}

CreateNewItem.propTypes = {
  onAddItem: PropTypes.func.isRequired,
};

export default CreateNewItem
