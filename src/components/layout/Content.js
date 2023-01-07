import React from "react";
import { Route, Routes } from "react-router-dom";

import MainPage from "../pages/Main";
import SearchPage from "../pages/Search";

function Content() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default Content;
