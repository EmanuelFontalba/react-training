import React from 'react';
import isEmail from 'validator/lib/isEmail';

const content = document.createElement('div');
document.body.appendChild(content);

module.exports = React.createClass({
  displayName: "state-input",
  //multiple, controlado y validado
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
    const people = [ ...this.state.people];
    const person = this.state.fields ;
    const fieldErrors = this.validate(person);
    console.log(fieldErrors);
    this.setState({fieldErrors});

    if(Object.keys(fieldErrors).length) return;

    this.setState({
      fields: {
        name: '',
        email: ''
      },
      people: people.concat(person),
    });

  },

  onNameChange(evt) {
    this.setState({ name: evt.target.value });
  },

  onInputChange(evt) {
    const fields = this.state.fields;
    fields[evt.target.name] = evt.target.value;
    this.setState({fields: fields});
  },

  validate(person) {
    const errors = {};
    if(!person.name) errors.name = 'Name Required';
    if(!person.email) errors.email = 'Email Required';
    if(person.email && !isEmail(person.email)) errors.email = 'Invalid Email';
    return errors;
  },

  render() {
    return (
      <div>
        <h1>Sign Up Sheet</h1>

        <form onSubmit={this.onFormSubmit}>
          <input
            placeholder='Name'
            name = 'name'
            value={this.state.fields.name}
            onChange={this.onInputChange}
          />

          <span style={{color: 'red'}}>
            {this.state.fieldErrors.name}
          </span>

          <br />

          <input
            placeholder='Email'
            name = 'email'
            value={this.state.fields.email}
            onChange={this.onInputChange}
          />
          <span style={{color: 'red'}}>
            {this.state.fieldErrors.email}
          </span>

          <input type='submit' />
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
  },
});
