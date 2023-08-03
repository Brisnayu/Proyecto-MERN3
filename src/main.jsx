import "./index.css";

import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App.jsx";
import RouteInit from "./components/RouteInit/RouteInit.jsx";
import Spinner from "./components/Spinner/Spinner";
import UserAndModalContextProvider from "./context/userAndModalContext.jsx";

const Home = lazy(() => import("./pages/Home.jsx"));
const Tictactoe = lazy(() => import("./pages/Tictactoe.jsx"));
const Hangman = lazy(() => import("./pages/Hangman.jsx"));
const Sudoku = lazy(() => import("./pages/Sudoku.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserAndModalContextProvider>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />

            <Route
              path="/hangman"
              element={
                <React.Suspense fallback={<Spinner />}>
                  <RouteInit>
                    <Hangman />
                  </RouteInit>
                </React.Suspense>
              }
            />
            <Route
              path="/tictactoe"
              element={
                <React.Suspense fallback={<Spinner />}>
                  <RouteInit>
                    <Tictactoe />
                  </RouteInit>
                </React.Suspense>
              }
            />
            <Route
              path="/sudoku"
              element={
                <React.Suspense fallback={<Spinner />}>
                  <RouteInit>
                    <Sudoku />
                  </RouteInit>
                </React.Suspense>
              }
            />
            <Route
              path="*"
              element={
                <React.Suspense fallback={<Spinner />}>
                  <NotFound />
                </React.Suspense>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserAndModalContextProvider>
  </React.StrictMode>,
);
