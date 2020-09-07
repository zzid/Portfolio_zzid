import React from 'react';

import { Route, NavLink } from 'react-router-dom';

import { Home, ProjectsPage, AboutPage, ReactLogo } from './pages';

import { Footer } from './component';

import title_pic from './images/title.png';
import './App.css';

const base_url = '/Portfolio_zzid'

function App() {
  return (
    <>

    <div className="App">
      <header>
        <div className="header-div">
          <img src={title_pic} alt='img err' style={{margin: '7vh', width:'40vw'}}/>
          <div className="link-div">
            <NavLink exact to={base_url} activeClassName='is-active'>Home</NavLink>
            <NavLink to={`${base_url}/projects`} activeClassName='is-active'>Projects</NavLink>
            <NavLink to={`${base_url}/about`} activeClassName='is-active'>About</NavLink>
            {/* <NavLink to={`${base_url}/react-logo`} activeClassName='is-active'>React Logo</NavLink> */}
          </div>
        </div>
      </header>

    </div>
    <div>
      <Route exact path={base_url} component={Home}/>
      <Route path={`${base_url}/about`} component={AboutPage}/>
      {/* <Route path={`${base_url}/react-logo`} component={ReactLogo}/> */}
      <Route path={`${base_url}/projects`} component={ProjectsPage}/>
    </div>

    <Footer/>
    </>
  );
}

export default App;
