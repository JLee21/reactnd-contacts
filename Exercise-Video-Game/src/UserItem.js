import React from 'react';

const UserItem = props => {

  const {first, last, username, gamesPlayed} = props.user

  console.log(props.user)
  console.log('333', props.user.username)
  return (
    <tr key={username}>
      <td>{username}</td>
      <td hideGames={props.hideGames}>{gamesPlayed}</td>
    </tr>
  )
}

// <li key={prop.user.username}>
// {prop.user.name}
// </li>

export default UserItem
