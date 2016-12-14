var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App');
require('./scss/styles.scss');

ReactDOM.render(  
  <App />,
  document.getElementById('app')
);