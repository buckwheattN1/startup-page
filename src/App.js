import React from "react";
import { Route, Routers, Routes } from "react-router-dom";

import Header from "./components/layout/Header";
import MainPage from "./components/pages/Main";
import SearchPage from "./components/pages/Search";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default App;
