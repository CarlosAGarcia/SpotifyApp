import React, { Component } from 'react';
import './css/mainBody.css';
import { getAuth } from '../../services/spotifyAPI'

class MainBody extends Component {
  
  componentDidMount(){
    getAuth()
    .then(()=>{

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
