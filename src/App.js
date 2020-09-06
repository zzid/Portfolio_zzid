import React from 'react';

import { Route, Link } from 'react-router-dom';

import { Home, About, ReactLogo } from './pages';
import title_pic from './images/title.png'
import './App.css';

function App() {
  return (
    <>

    <div className="App">
      <header>
        <div className="header-div">
          <img src={title_pic} alt='img err' style={{margin: '7vh', width:'38vw'}}/>
          <div style={{alignItems:'flex-end'}}>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/react-logo'>React Logo</Link>
          </div>
        </div>
      </header>

    </div>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/react-logo" component={ReactLogo}/>
    </div>
    </>
  );
}

export default App;
