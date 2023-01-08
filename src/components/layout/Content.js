import React from "react";
import { Route, Routes } from "react-router-dom";

import MainPage from "../pages/Main";
import SearchPage from "../pages/Search";

import classes from "./Content.module.css";

function Content() {
  return (
    <main className={classes.main}>
      <section className={classes.content}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </section>
      <section className={classes.description}>INFORMATION</section>
    </main>
  );
}

export default Content;
