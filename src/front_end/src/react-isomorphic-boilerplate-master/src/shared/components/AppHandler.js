import React from "react";
import { Link } from "react-router";

export default class AppHandler extends React.Component {
  render() {
    return <div>
              Hello App Handler
              <Link to="about">About</Link>
            </div>;
  }
}
