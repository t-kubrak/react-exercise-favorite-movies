import React, { Component } from 'react';

class ListUsersMovies extends Component
{
  render() {
   return (
     <ol>
       {this.props.profiles.map(profile => {
          const userName = this.props.users[profile.userID].name;
          const movieName = this.props.movies[profile.favoriteMovieID].name;
    
          return (<li key={profile.id}>{`${userName}'s favorite movie is ${movieName}`}</li>);
  	   })}
	 </ol>
	)
  }
}

export default ListUsersMovies;