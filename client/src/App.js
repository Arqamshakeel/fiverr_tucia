import React from "react";
import "./App.css";
// import Header from "./components/header/Header";
import { BrowserRouter } from "react-router-dom";
import ResponsiveDrawer from "./components/header/ResponsiveDrawer";

function App() {
  return (
    <BrowserRouter>
      <ResponsiveDrawer />
    </BrowserRouter>
  );
}

export default App;
