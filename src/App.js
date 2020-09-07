import React from 'react';

import { Route, NavLink, Switch, useLocation} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Home, ProjectsPage, AboutPage, ReactLogo } from './pages';

import { Footer } from './component';

import title_pic from './images/title.png';
import './App.css';

const base_url = '/Portfolio_zzid'

function App() {
  const location = useLocation();
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
          </div>
        </div>
      </header>
    </div>
      <TransitionGroup>
        <CSSTransition key={location.key} timeout={300} classNames="fade">
          <Switch location={location}>
            <Route exact path={base_url} component={Home}/>
            <Route path={`${base_url}/about`} component={AboutPage}/>
            <Route path={`${base_url}/projects`} component={ProjectsPage}/>
          </Switch>
        </CSSTransition>
      </TransitionGroup>

    <Footer/>
    </>
  );
}

export default App;
