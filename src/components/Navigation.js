import React from "react";
import { Link } from "react-router-dom";

import classes from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to="/">MAIN</Link>
        </li>
        <li>
          <Link to="/search">SEARCH</Link>
        </li>
        <li>WORK</li>
        <li>FUN</li>
      </ul>
    </nav>
  );
}

export default Navigation;
