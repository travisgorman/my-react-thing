import React from 'react';
import ReactDOM from 'react-dom';

const messageStyles = {'width':500,'margin':'0 auto','textAlign':'center'}
const imgStyles ={'maxWidth':400}
class Message extends React.Component {
  render() {
    return (  
      <div className="message" style={messageStyles}>
        <h3 style={{'display':'inline-block','marginRight':24,'fontFamily':'sans-serif'}}>{this.props.title}</h3>
        <em>{this.props.message}</em>
        <img 
          src={this.props.src}
          style={{'maxWidth':400}}/>
      </div>
    );
  }
}

module.exports = Message;