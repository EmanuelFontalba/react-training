import React from 'react';

const content = document.createElement('div');
document.body.appendChild(content);

module.exports = React.createClass({
  displayName: "basic-button",

  /*onGreatClick(evt) {
    console.log('The user clicked button-1: great', evt);
  },

  onAmazingClick(evt) {
    console.log('The user clicked button-2: amazing', evt);
  },*/

  onButtonClick(evt) {
    const btn = evt.target;
    console.log(`The user clicked ${btn.name}: ${btn.value}`);
  },

  render() {
    /*return (
      <div>
        <h1>What do you think of React?</h1>

        <button
          name='button-1'
          value='great'
          onClick={this.onGreatClick}
        >
          Great
        </button>

        <button
          name='button-2'
          value='amazing'
          onClick={this.onAmazingClick}
        >
          Amazing
        </button>
      </div>
    );*/

    return (
      <div>
        <h1>What do you think of React?</h1>

        <button
          name='button-1'
          value='great'
          onClick={this.onButtonClick}
        >
          Great
        </button>

        <button
          name='button-2'
          value='amazing'
          onClick={this.onButtonClick}
        >
          Amazing
        </button>
      </div>
    );
  },
});
