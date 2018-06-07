import React, { Component } from 'react';

class UserInput extends Component {

  state = {
    user: {
      username: '',
      first: '',
      last: ''
    },
    userExists: false,
  }

  clearInput = () => (
    this.setState({    user: {
          username: '',
          first: '',
          last: ''
        }})
  )

  handleSubmit = event => {
    event.preventDefault();

    if (!this.state.userExists) {
      this.props.onAddUser(this.state.user)
    }

    this.clearInput();
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    if (name === 'username'){
      const userExists = this.isUserDuplicated(this.state.user.username)
      this.setState(() => ({
        userExists: true,
      }));
    }
    // Take all of the State, but but update the user part?
    this.setState(currState => ({
      ...currState,
      user: {
        ...currState.user,
        [name]: value,
      },
    }));
  };

  inputIsEmpty = () => {
    const { username, first, last } = this.state.user
    return username === '' || first === '' || last === '';
  };

  isUserDuplicated = currUsername => {
    const {users} = this.state.users;
    for (let user of users) {
      if (user.username === currUsername) {
        return true;
      }
    }
    console.log('user not duplicated');
    return false;
  }

  render() {

    const {username, first, last} = this.state.user;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
          <input
            type="text"
            name="username"
            placeholder="Username!"
            value={username}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="first"
            placeholder="Your First Name!"
            value={first}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="last"
            placeholder="Your Last Name!"
            value={last}
            onChange={this.handleInputChange}
          />
          </div>
          <button disabled={this.inputIsEmpty()}>Add</button>
        </form>

        {this.state.userExists ? (
          <p className="error">You could add user that already exists.</p>
        ) : (
          ''
        )}

        <button onClick={this.onToggleGames}>Show/Hide Games</button>
      </div>
    )
  }
}

export default UserInput
