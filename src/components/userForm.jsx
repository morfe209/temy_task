import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import { saveUser } from "../services/userService";

class UserForm extends Form {
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
    states: "",
    cities: "",
    errors: {}
  };

  schema = {
    name: Joi.string()
      .required()
      .label("Name"),
    email: Joi.string()
      .required()
      .email()
      // .regex(/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/)
      .label("Email"),
    adress: Joi.string().label("Adress"),
    about_me: Joi.string()
      .max(500)
      .label("About me"),
    phone_number: Joi.number()
      .required()
      .label("Phone Number"),
    country_id: Joi.string()
      .required()
      .label("Country"),
    state_id: Joi.string()
      .required()
      .label("State"),
    city_id: Joi.string()
      .required()
      .label("City")
  };

  doFilterStates = country_id => {
    const { states } = this.props;
    const filteredStates = states.filter(
      state => state["country_id"] === country_id
    );
    this.setState({ states: filteredStates });
  };
  doFilterCities = state_id => {
    const { cities } = this.props;
    const filteredCities = cities.filter(city => city["state_id"] === state_id);
    this.setState({ cities: filteredCities });
  };

  doSubmit = async () => {
    await saveUser(JSON.stringify(this.state.data));
    // this.props.updateTable(result);
    this.setState({ data: this.clearState(), states: "", cities: "" });
  };
  clearState = () => {
    return {
      name: "",
      email: "",
      adress: "",
      about_me: "",
      phone_number: "",
      country_id: "",
      state_id: "",
      city_id: ""
    };
  };
  render() {
    const { countries } = this.props;
    const { states, cities } = this.state;
    return (
      <div>
        <h1>User Table</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="col-md-4 mb-3">
              {this.renderInput("name", "Name *", "enter your name")}
            </div>
            <div className="col-md-4 mb-3">
              {this.renderInput(
                "email",
                "Email *",
                "enter your email",
                "email"
              )}
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-4 mb-3">
              {this.renderInput(
                "phone_number",
                "Phone Number *",
                "enter your phone number"
              )}
            </div>
            <div className="col-md-4 mb-3">
              {this.renderInput("adress", "Adress", "enter your adress")}
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-8 mb-3">
              {this.renderTextArea(
                "about_me",
                "About me",
                "something about yourself",
                3
              )}
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-2 mb-3">
              {this.renderSelect("country_id", "Country *", countries)}
            </div>
            <div className="col-md-3 mb-3">
              {states && this.renderSelect("state_id", "State *", states)}
            </div>
            <div className="col-md-3 mb-3">
              {cities && this.renderSelect("city_id", "City *", cities)}
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-4 mb-3">{this.renderButton("Save")}</div>
          </div>
        </form>
      </div>
    );
  }
}

export default UserForm;
