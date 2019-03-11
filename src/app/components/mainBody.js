import React, { Component } from 'react';
import './css/mainBody.css';
import axios from 'axios'

class MainBody extends Component {
  
  render() {
    const API_END_POINT = process.env.API_END_POINT
    //https://accounts.spotify.com/api/token
    // Content-Type application/x-www-form-urlencoded 
    // Auth Basic Yz...ZDY=      <- base64 encoded client id and secret   Basic <id:secret>

    //BODY - grant_type : client_credentials. 
    return (
      <div className="mainBody">
        
      </div>
    );
  }
}

export default MainBody
