import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Nav from './Nav';
import Nav2 from './Nav2';
import About from './About';
import Landing from './Landing';
import Contact from './Contact';
import Footer from './Footer';
import Projects from './Projects';
import Project1 from './projects/project1';
import Project2 from './projects/project2';
import Project3 from './projects/project3';
import Project4 from './projects/project4';

const routes = [
  {
    path: '/',
    footer: () => <Footer/>
  },
  {
    path: '/',
    exact: true,
    navbar: () => <Nav/>,
    main: () => <Landing/>
  },
  {
    path: '/About',
    exact: true,
    navbar: () => <Nav/>,
    main: () => <About />
  },

  {
    path: '/projects',
    exact: true,
    navbar: () => <Nav/>,
    main: () => <Projects/>
  },
    {
    path: '/projects/project1',
    exact: true,
    navbar: () => <Nav2/>,
    main: () => <Project1/>
  },
      {
    path: '/projects/project2',
    exact: true,
    navbar: () => <Nav2/>,
    main: () => <Project2/>
  },
        {
    path: '/projects/project3',
    exact: true,
    navbar: () => <Nav2/>,
    main: () => <Project3/>
  },
          {
    path: '/projects/project4',
    exact: true,
    navbar: () => <Nav2/>,
    main: () => <Project4/>
  },
    {
    path: '/contact',
    exact: true,
    navbar: () => <Nav/>,
    main: () => <Contact/>
  },
];

class Routes extends Component {
  render() {
    return (
      <Grid container alignItems={`center`} justify={`center`} spacing={24}>
        <Grid item xs={12}>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={route.navbar}
            />
          ))}
        </Grid>
        <Grid item xs={12}>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={route.main}
            />
          ))}
        </Grid>
        <Grid item xs={12}>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={route.footer}
            />
          ))}
        </Grid>
      </Grid>
    );
  }
}

export default Routes;