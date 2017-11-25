import React from 'react';
import isEmail from 'validator/lib/isEmail';

const Field = require('./field-component.jsx');

const content = document.createElement('div');
document.body.appendChild(content);

module.exports = React.createClass({
  displayName: "FormComponent",

  getInitialState() {
    return {
      fields: {
        name: '',
        email: ''
      },
      people: [],
      fieldErrors: {},
    };
  },

  onFormSubmit(evt) {
    evt.preventDefault();

    const people = this.state.people;
    const person = this.state.fields;

    if(this.validate()) return;

    this.setState({
      fields: {
        name: '',
        email: ''
      },
      people: people.concat(person),
    });

  },

  onInputChange({name, value, error}) {
    const fields = this.state.fields;
    const fieldErrors = this.state.fieldErrors;

    fields[name] = value;
    fieldErrors[name] = error;

    this.setState({fields, fieldErrors});
  },

  validate() {
    const person = this.state.fields;
    const fieldErrors = this.state.fieldErrors;
    const errMessages = Object.keys(fieldErrors).filter((k) => fieldErrors[k]);

    if(!person.name) return true;
    if(!person.email) return true;
    if(errMessages.length) return true;

    return false;
  },

  render(){
    return(
      <div>
        <h1>Sign Up Sheet</h1>

        <form onSubmit={this.onFormSubmit}>
          <Field
            placeholder = 'Name'
            name = 'name'
            value = {this.state.fields.name}
            onChange = {this.onInputChange}
            validate = {(val) => (val ? false: 'Name Required')}
          />
          <br />
          <Field
            placeholder = 'Email'
            name = 'email'
            value = {this.state.fields.email}
            onChange = {this.onInputChange}
            validate = {(val) => (isEmail(val) ? false: 'Invalid Required')}
          />
          <br />

          <input type='submit'  disabled={this.validate()} />
        </form>

        <div>
          <h3>Names</h3>
          <ul>
            { this.state.people.map(({name, email}, i) =>
              <li key={i}>
                {name} - {email}
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
});
