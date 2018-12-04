import React, { Component } from "react";
import Joi from "joi-browser";

class UserForm extends Component {
  state = {
    data: {
      name: "",
      email: "",
      adress: "",
      about_me: "",
      phone_number: "",
      country_id: "",
      state_id: "",
      city_id: ""
    },
    countries: this.props.countries,
    states: this.props.states,
    cities: this.props.cities,
    error: []
  };

  schema = {
    name: Joi.string()
      .required()
      .label("Name"),
    email: Joi.string()
      .required()
      .regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
      .label("Email"),
    adress: Joi.string().label("Adress"),
    about_me: Joi.string()
      .max(500)
      .label("About me")
  };
  handleSubmit = () => {};
  render() {
    return <form onSubmit={this.handleSubmit()} />;
  }
}

export default UserForm;
