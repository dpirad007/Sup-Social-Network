import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwtDecode from "jwt-decode";
import "./App.css";

//pages
import { home, login, signup, about, maha, store, user } from "./pages";

//components
import { Navbar } from "./components";

//utils
import AuthRoute from "./utils/AuthRoute";

let authenticated;
const token = localStorage.auth_token;
if (token) {
  const decodedToken = jwtDecode(token);
  //console.log(decodedToken);
  if (decodedToken.exp * 1000 < Date.now()) {
    window.location.href = "/login";
    authenticated = false;
  } else {
    authenticated = true;
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="container">
            <Navbar />
            <Switch>
              <Route exact path="/" component={home} />
              <AuthRoute
                exact
                path="/login"
                component={login}
                authenticated={authenticated}
              />
              <AuthRoute
                exact
                path="/signup"
                component={signup}
                authenticated={authenticated}
              />
              <Route exact path="/about" component={about} />
              <Route exact path="/maha" component={maha} />
              <Route exact path="/store" component={store} />
              <Route exact path="/user/:id" component={user} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
