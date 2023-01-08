import React, { useState } from "react";
import Weather from "../Weather";

function DateTime() {
  // Set time and refresh it every second
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString("pl-PL", { hour12: false })
  );

  setInterval(() => {
    setCurrentTime(new Date().toLocaleTimeString("pl-PL", { hour12: false }));
  }, 1000);
  // Date settings
  const formatter = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const date = new Date();
  const result = formatter.format(date);

  return (
    <div>
      <a className="nav">
        System Date
        <time style={{ margin: "4rem" }}>[{result}]</time>
      </a>
      <br />
      <a className="nav">
        System Time
        <time style={{ margin: "4rem" }}>[{currentTime}]</time>
      </a>
    </div>
  );
}

function MainPage() {
  return (
    <div>
      <DateTime />
      <Weather />
    </div>
  );
}

export default MainPage;
