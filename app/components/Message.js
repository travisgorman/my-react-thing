import React from 'react';
import ReactDOM from 'react-dom';

class Message extends React.Component {
  render() {
    return (  
      <div className="message">
        <h3>{this.props.title}</h3>
        <em>{this.props.message}</em>
        <img src={this.props.src}/>
      </div>
    );
  }
}

module.exports = Message;