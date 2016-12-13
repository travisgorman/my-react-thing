var React = require('react');

const App = React.createClass({
  getInitialState(){
    return {
      name: "Travis",
      status: "Working",
    };
  },
  render(){
    return (  
      <div>
        <h3>My name is {this.state.name}, and the status of this app is:</h3>
        <h1>{this.state.status}</h1>
      </div>
    );
  },
});

module.exports = App;