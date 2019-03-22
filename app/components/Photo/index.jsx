import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class  Photo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
 
  render(){
    console.log('in here!!!');
    return (
      <div>
        <img src={this.props.photo} width='300'/>
     </div>
    )
  }
}

module.exports = Photo;
