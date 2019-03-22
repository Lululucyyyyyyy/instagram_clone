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
      <div className='post'>
        <img src={this.props.photo}/>
     </div>
    )
  }
}

module.exports = Photo;
