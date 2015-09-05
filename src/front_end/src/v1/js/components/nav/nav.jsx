import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

var data = Immutable.OrderedSet([1]);

let Nav = React.createClass({

    render: function() {
      return (

        <nav className="navbar navbar-default navbar-custom navbar-fixed-top">
          <div className="container-fluid">
              <div className="navbar-header page-scroll">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                  </button>
                  <a className="navbar-brand" href="/">Sergey Kozachenko aka Grievoushead</a>
              </div>
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav navbar-right">
                      <li>
                           <a href="#/">Home</a>
                      </li>
                      <li>
                        {data.toSeq().map(v => (
                           <Link to="about" key={v}>{v}</Link>
                         )).toArray()}
                      </li>
                      <li>
                          <a href="#/projects">Projects</a>
                      </li>
                      <li>
                          <a href="/contact">Contact</a>
                      </li>
                      <li>
                          <a href="//grievoushead.github.io/video-calls/">Video Call</a>
                      </li>
                      <li>
                          <a href="//grievoushead.github.io/fire-chat/">Chat</a>
                      </li>
                  </ul>
              </div>
          </div>
        </nav>

       );
    }
});

React.render(
  <Nav />,
  document.getElementById("main_nav")
);

export default Nav;
