import React from "react";
import Movies from "./components/movies";
import { Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import Customers from "./components/Customer";
import Rentals from "./components/Rentals";
import NotFound from "./components/NotFound";
import NavBar from "./components/NavBar";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/login" component={LoginForm}></Route>
          <Route path="/movies/:id" component={MovieForm}></Route>
          <Route path="/movies" component={Movies}></Route>
          <Route path="/customers" component={Customers}></Route>
          <Route path="/rentals" component={Rentals}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
