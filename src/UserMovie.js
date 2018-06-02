import React, { Component } from 'react';

class UserMovie extends Component {
  render() {
    return (
      <ul className='user-list'>
        {this.props.profiles.map(profile => {
          const userName = this.props.users[profile.userID].name;
          const favMovieName = this.props.movies[profile.favoriteMovieID].name;
          console.log(favMovieName);
          return(
          <li key={profile.id} className='profile-list-item'>
            <div className='profile-details'>
            <p>{userName} favorit movie is {favMovieName}</p>
            </div>
          </li>
        );
        })}
      </ul>
    )
  }

}

export default UserMovie

// <p> {this.props.users[profile.id]} favorite movie is
//     {this.props.movies[profile.favoriteMovieID]}
// </p>
