import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import AboutHandler from './components/about/about.jsx';
import ContactHandler from './components/contact/contact.jsx';
import HomeHandler from './components/home/home.jsx';
import NavHandler from './components/nav/nav.jsx';

let App = React.createClass({
  render() {
    return (
      <RouteHandler/>
    );
  }
});

let routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="home" path="/" handler={HomeHandler}/>
    <Route name="about" path="/about" handler={AboutHandler}/>
    <Route name="contact" path="/contact" handler={ContactHandler}/>
  </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, document.getElementById('main_content'));
});
