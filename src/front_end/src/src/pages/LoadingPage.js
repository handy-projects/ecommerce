import React from "react";

if (process.env.BROWSER) {
  require("../style/Loader.scss");
  require("../style/Animate.scss");
}

class LoadingPage extends React.Component {

  render() {
    return (
      <div>
        <div className="Loader Animate--slow Animate-fadeIn"></div>
      </div>
    );
  }

}

export default LoadingPage;
