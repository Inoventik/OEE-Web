import React, { useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./components/pages/Dashboard";
import Home from "./components/pages/Home";
import Journal from "./components/pages/Journal";
import About from "./components/pages/About";
import { AuthContext } from "./context/auth";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Admin from "./components/pages/Admin";

export default function App() {
  const [authTokens, setAuthTokens] = useState();

  const setTokens = data => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  };

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/journal" component={Journal} />
          <PrivateRoute path="/admin" component={Admin} />
          <PrivateRoute path="/about" component={About} />
          <PrivateRoute
            path="/"
            component={() => {
              return <Redirect to="/" />;
            }}
          />
        </Switch>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
