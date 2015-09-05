import React from "react";
import { Link } from "react-router";

export default class AppHandler extends React.Component {
  render() {
    return <div>
              Hello About Handler
              <Link to="home">Home</Link>
            </div>;
  }
}
