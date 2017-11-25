import React from 'react';
import isEmail from 'validator/lib/isEmail';

const Field = require('./field-component.jsx');
const CourseSelect = require('./course-select.jsx');
//Es una copia de form component pero vamos a añadirle la funcionalidad
//del la selección de cursos de forma asincrona


const content = document.createElement('div');
document.body.appendChild(content);

module.exports = React.createClass({
  displayName: "AsyncForm",

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
    if(!person.course) return true;
    if(!person.department) return true;
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

          <CourseSelect
            department={this.state.fields.department}
            course={this.state.fields.course}
            onChange={this.onInputChange}
          />

          <br />

          <input type='submit'  disabled={this.validate()} />
        </form>

        <div>
          <h3>Names</h3>
          <ul>
            { this.state.people.map(({name, email, department, course}, i) =>
              <li key={i}>
                {[ name, email, department, course].join(' - ')}
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
});
