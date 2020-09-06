import React from 'react';

import { Card } from './component';

import profile_picture from './images/profile_picture.jpeg'
import title_pic from './images/title.png'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <img src={title_pic} alt='img err' style={{margin: '7vh', width:'38vw'}}></img>
      </header>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <div className="container">
        <Card/>
      </div>
    </div>
  );
}

export default App;
