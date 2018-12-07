import React, { Component } from "react";
import Users from "./components/users";
import UserForm from "./components/userForm";
import { getCountries } from "./services/countrieService";
import { getStates } from "./services/stateService";
import { getCities } from "./services/cityService";
import { getUsers } from "./services/userService";

class App extends Component {
  state = {
    users: [],
    countries: [],
    states: [],
    cities: []
  };

  async componentDidMount() {
    const { data: users } = await getUsers();
    const { data: countries } = await getCountries();
    const { data: states } = await getStates();
    const { data: cities } = await getCities();
    this.setState({ users, countries, states, cities });
  }
  // changeTable = data => {
  //   const users = [...this.state.users];
  //   console.log(users);
  //   users.push(data);
  //   this.setState({ users });
  // };
  render() {
    const { users, countries, cities, states } = this.state;
    return (
      <div>
        <div className="container">
          <UserForm
            countries={countries}
            cities={cities}
            states={states}
            updateTable={this.changeTable}
          />
        </div>
        <div className="container">
          <Users
            users={users}
            countries={countries}
            cities={cities}
            states={states}
          />
        </div>
      </div>
    );
  }
}

export default App;
