import React from 'react';
import Message from './Message';


const App = React.createClass({
  getInitialState(){
    return {
      name: "Travis",
      status: "WORKING",
    };
  },
  render() {
    return (
      <div>
        <div className="status">
          <h2>Hello, I'm {this.state.name}.</h2>
          <ul>
            <li>If you see my name above, my JSX is being transpiled and rendered.</li>
            <li>If this <span className="hl">word</span> is big and pink, my SASS is compiling to CSS.</li>
            <li>If you see the Queen below, my image loaders and asset handlers are working.</li>
          </ul>
          <h2>The status of this app is:</h2>
          <h1>{this.state.status}</h1>
        </div>
        <Message 
          title="Swiggity Swooty" 
          message="I'm comin' for that booty!"
          src='http://i.imgur.com/vNLaE9v.jpg' />
      </div>
      
    );
  },
});

module.exports = App;

// http://i.imgur.com/hO0W73C.jpg