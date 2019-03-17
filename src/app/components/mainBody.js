import React, { Component } from 'react';
import '../css/mainBody.css';
import { getAuth } from '../../services/spotifyAPI'

class MainBody extends Component {
  
  componentDidMount(){
    getAuth()
    .then(()=>{
      console.log('in then of getAuth')
    })
  }

  render() {
    return (
      <div className="mainBody">
        
      </div>
    );
  }
}

export default MainBody
