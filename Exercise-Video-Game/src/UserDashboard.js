import React, { Component } from 'react';
import UserInput from './UserInput';
import UserLists from './UserLists';

class UserDashboard extends Component {
  state = {
    toggleGames: false,
    users: []
  }

  handleAddUser = user => {
    this.setState(prevState => ({ users: [...prevState.users, user] }));
  };

  handleToggleGames = toggle => {
    this.setState(oldState => ({
      toggleGames: !oldState.toggleGames,
    }))
  }

  render() {

    // For testing
    const users = [
      {first: 'Joe', last: 'Pesci', username: 'joey', gamesPlayed: 0},
      {first: 'Mary', last: 'Lemon', username: 'squeeze', gamesPlayed: 0}
    ]

    return (
      <div>
        <UserInput
          onAddUser={this.handleAddUser}
          users={users}
          onToggleGames={this.handleToggleGames}
        />
        <UserLists users={this.state.users}/>
      </div>
    )
  }
}

export default UserDashboard
