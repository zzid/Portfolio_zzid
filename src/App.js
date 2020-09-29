import React from 'react';

import { Route, NavLink, Switch, useLocation} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Home, ProjectsPage, AboutPage} from './pages';

import { Footer } from './component';

import titlePic from './images/title.png';
import './App.css';

const baseURL = '/Portfolio_zzid'

function App() {
  const location = useLocation();
  return (
    <>

    <div className="App">
      <header>
        <div className="header-div">
          <img src={titlePic} alt='img err' style={{margin: '7vh', width:'40vw'}}/>
          <div className="link-div">
            <NavLink exact to={baseURL} activeClassName='is-active'>Home</NavLink>
            <NavLink to={`${baseURL}/projects`} activeClassName='is-active'>Projects</NavLink>
            <NavLink to={`${baseURL}/about`} activeClassName='is-active'>About</NavLink>
          </div>
        </div>
      </header>
    </div>
      <TransitionGroup>
        <CSSTransition key={location.key} timeout={300} classNames="fade">
          <Switch location={location}>
            <Route exact path={baseURL} component={Home}/>
            <Route path={`${baseURL}/about`} component={AboutPage}/>
            <Route path={`${baseURL}/projects`} component={ProjectsPage}/>
          </Switch>
        </CSSTransition>
      </TransitionGroup>

    <Footer/>
    </>
  );
}

export default App;
