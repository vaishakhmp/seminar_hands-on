import React, { Component } from 'react';
import axios from 'axios';

class UserList extends Component {
  constructor() {
    super();
    this.state = {
      users: [], // Initialize an empty array to store the fetched users
      isLoading: true, // Track loading state
      error: null, // Track any errors during the request
    };
  }

  componentDidMount() {
    // Fetch the list of users when the component mounts
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        // Update the state with the fetched users and set isLoading to false
        this.setState({ users: response.data, isLoading: false });
      })
      .catch(error => {
        // Handle any errors and set isLoading to false
        this.setState({ error, isLoading: false });
      });
  }

  render() {
    const { users, isLoading, error } = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>Error: {error.message}</p>;
    }

    return (
      <div>
        <h2>User List</h2>
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UserList;
