var React = require('react');
var Message = require('./Message');

const App = React.createClass({
  getInitialState(){
    return {
      name: "Travis",
      status: "Working",
    };
  },
  styles: {
    'fontFamily':'sans-serif','textAlign':'center', 'marginTop':'4rem'
  },
  render(){
    return (
      <div>
        <div style={this.styles}>
          <h3>The status of this app is:</h3>
          <h1 style={{'color':'green'}}>
            {this.state.status}
          </h1>
        </div>
        <Message 
            title="Swiggity Swooty" 
            message="I'm comin' for that booty!"
            src='http://www.deathmetal.org/wp-content/uploads/trump-two-thumbs-up.jpg' />
      </div>
      
    );
  },
});

module.exports = App;