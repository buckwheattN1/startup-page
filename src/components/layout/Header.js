import React from "react";

import Quotations from "../../Quotations";
import classes from "./Header.module.css";
import Navigation from "../Navigation";

function Header() {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const randInt = getRandomInt(Quotations.length);

  return (
    <div>
      <header className={classes.header}>
        "{Quotations[randInt].qoute.toUpperCase()}" -{" "}
        {Quotations[randInt].author}
      </header>
      <Navigation />
    </div>
  );
}

export default Header;
