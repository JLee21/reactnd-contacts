import React from 'react';
import UserItem from './UserItem'

const UserLists = props => {

  const userItems = props.users.map(user => (
    <UserItem user={user}/>
  ));

  console.log(userItems);

  return (
    <table>
      <thead>
        <tr key='header'>
          <th>Username</th>
          <th>Games Played</th>
        </tr>
      </thead>
      <tbody>
        {userItems}
      </tbody>
    </table>);
}

// props.users.map((user, index) => {
//   <UserItem user={user} key={index}/>
// })
export default UserLists
