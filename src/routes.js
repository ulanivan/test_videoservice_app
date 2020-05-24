import React from "react";
import {Route, Switch} from "react-router-dom";
import {MoviePage} from "./pages/MoviePage";
import {HomePage} from "./pages/HomePage";

export const useRoutes = () => {
  return (
      <Switch>
          <Route exact path="/">
              <HomePage />
          </Route>
          <Route path="/movie-page/:movieName" component={MoviePage} />
      </Switch>
  );
};
