import React, { Component } from 'react';
import './css/App.css';

class App extends Component {
  render() {
    //https://accounts.spotify.com/api/token
    // Content-Type application/x-www-form-urlencoded 
    // Auth Basic Yz...ZDY=      <- base64 encoded client id and secret   Basic <id:secret>

    //BODY - grant_type : client_credentials. 
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
