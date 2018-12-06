import React, { Component } from "react";
import Users from "./components/users";
import UserForm from "./components/userForm";
import axios from "axios";

class App extends Component {
  state = {
    users: [],
    countries: [],
    states: [],
    cities: [],
    currentCountry: null,
    currentState: null,
    currentCity: null
  };

  async componentDidMount() {
    const { data: users } = await axios.get("http://localhost:3001/users");
    const { data: countries } = await axios.get(
      "http://localhost:3001/countries"
    );
    const { data: states } = await axios.get("http://localhost:3001/states");
    const { data: cities } = await axios.get("http://localhost:3001/cities");
    this.setState({ users, countries, states, cities });
  }
  render() {
    const { users, countries, cities, states } = this.state;
    return (
      <div>
        <div className="container">
          <UserForm countries={countries} cities={cities} states={states} />
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
