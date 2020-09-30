import React from "react";
import "./App.css";
// import Header from "./components/header/Header";
import { BrowserRouter } from "react-router-dom";
import ResponsiveDrawer from "./components/header/ResponsiveDrawer";
import Header from "./components/landingPage/Header";
import Blog from "./components/landingPage/Blog";
import CustomHeader from "./components/header/CustomHeader";

function App() {
  return (
    <BrowserRouter>
      {/* <ResponsiveDrawer /> */}
      <CustomHeader />
      {/* <Header /> */}
      {/* <Blog /> */}
    </BrowserRouter>
  );
}

export default App;
