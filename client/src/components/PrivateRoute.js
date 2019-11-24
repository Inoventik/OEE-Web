import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../context/auth";
import Layout from "./Layout";

function PrivateRoute({ component: Component, ...rest }) {
  const { authTokens } = useAuth();

  return (
    <Route
      {...rest}
      render={props =>
        authTokens ? (
          <Layout>
            <Component {...props} />
          </Layout>
        ) : (
          // <Redirect to="/login" />
          <Layout>
            <Component {...props} />
          </Layout>
        )
      }
    />
  );
}

export default PrivateRoute;
