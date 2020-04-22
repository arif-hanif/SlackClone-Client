import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import Router from "./configs/router";
import client from "./configs/apollo";

const App = () => (
  <ApolloProvider client={client}>
    <Router />
  </ApolloProvider>
);

export default App;
