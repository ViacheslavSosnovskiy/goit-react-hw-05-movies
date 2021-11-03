// import './App.css';
import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

// items
import Navigation from "./navigation/Navigation";

// spinner
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

// toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// lazy
const HomePage = lazy(() =>
  import("../pages/homePage/HomePage" /* webpackChankName: 'home-page' */)
);

const MoviesPage = lazy(() =>
  import("../pages/moviesPage/MoviesPage" /* webpackChankName: 'movies-page' */)
);

const NotFoundPage = lazy(() =>
  import(
    "../pages/notFoundPage/NotFoundPage" /* webpackChankName: 'notFound-page' */
  )
);

// const KEY = '42d598709b0517212023a74116f4ecb9'

export default function App() {
  return (
    <>
      <Navigation />
      {/* временно */}
      <br />
      <Suspense
        fallback={
          <Loader
            type="ThreeDots"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
          />
        }
      >
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/movies">
            <MoviesPage />
          </Route>

          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Suspense>
      <ToastContainer />
    </>
  );
}