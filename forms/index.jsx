import React from 'react';
import { render } from 'react-dom';

import BasicButton from './react-custom-components/basic-button.jsx';
import BasicInput from './react-custom-components/basic-input.jsx';
import StateInput from './react-custom-components/state-input.jsx';
import FormComponent from './react-custom-components/form-component.jsx';

const routes = [
  BasicButton, BasicInput, StateInput,
  FormComponent,
];

const location = window.location;
window.addEventListener('hashchange', location.reload.bind(location));
const loc = location.hash.replace('#/', '');
const element = loc ? createRoute(loc) : createTOC();

const container = document.createElement('div');
document.body.appendChild(container);

render(element, container);

function createTOC() {
  return (
    <div>
      {routes.map((route, i) =>
        <li key={i}><a href={`#/${(i + 1)}`}>{route.displayName}</a></li>
      )}
    </div>
  );
}

function createRoute(nStr) {
  let i = nStr - 1;
  if (i < 0) i = 0;
  if (i > routes.length - 1) i = routes.length - 1;

  const navStyle = {
    position: 'fixed', bottom: 50, width: '100%', textAlign: 'center',
  };
  const isFirst = i <= 0;
  const isLast = i >= routes.length - 1;

  return (
    <div>
      {React.createElement(routes[i])}
      <div style={navStyle}>
        { isFirst ? '' : <a href={`#/${i}`}>{'<'}</a> }
        <a href={location.href.replace(location.hash, '')}>TOC</a>
        { isLast ? '' : <a href={`#/${(i + 2)}`}>{' > '}</a> }
      </div>
    </div>
  );
}
