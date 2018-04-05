import React, { Component, Fragment } from "react";
import Navpills from "./subcomponents/Navpills";

class Header extends Component {
  render() {
    return (
      <header>
        <h1>Header</h1>
        <Navpills />
      </header>
    );
  }
}

export default Header;
