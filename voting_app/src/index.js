import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ProductList from './js-modules/ProductList';

import registerServiceWorker from './registerServiceWorker';

import './js-modules/data.js'

const data = (function () {
  function generateVoteCount() {
    return Math.floor((Math.random() * 50) + 15);
  }

  const data = [
    {
      id: 1,
      title: 'Yellow Pail',
      description: 'On-demand sand castle construction expertise.',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'img/avatars/emanuel.jpg',
      productImageUrl: 'img/products/product1.png',
    },
    {
      id: 2,
      title: 'Supermajority: The Fantasy Congress League',
      description: 'Earn points when your favorite politicians pass legislation.',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'img/avatars/emanuel.jpg',
      productImageUrl: 'img/products/product1.png',
    }
  ];

  return data;
})();

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<ProductList dataProducts={data}/>, document.getElementById('content'));
registerServiceWorker();
