import React from "react";
import { PhotoCardWithQuery } from "./container/PhotoCardWithQuery";
import { Logo } from "./components/Logo";
import { GlobalStyle } from "./components/GlobalStyles";
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { Router } from "@reach/router";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path="/" />
        <Home path="/pet/:categoryId" />
        <Detail path="/detail/:detailId" />
      </Router>
    </>
  );
};
