import React, { Component } from "react";

class Users extends Component {
  render() {
    const { users, countries, cities, states } = this.props;
    let usersTable;
    if (users.length !== 0) {
      usersTable = users.map(user => (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user["phone_number"]}</td>
          <td>
            {countries.find(country => country.id == user["country_id"]).name}
          </td>
          <td>{states.find(state => state.id == user["state_id"]).name}</td>
          <td>{cities.find(city => city.id == user["city_id"]).name}</td>
          <td>{user.createdAt.toString()}</td>
        </tr>
      ));
    }
    return (
      <table className="table">
        <thead>
          <tr>
            <th>name</th>
            <th>email</th>
            <th>phone</th>
            <th>Country</th>
            <th>state</th>
            <th>city</th>
            <th>created Date</th>
          </tr>
        </thead>
        <tbody>{usersTable}</tbody>
      </table>
    );
  }
}

export default Users;
