import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./configs/apollo";

const App = () => <ApolloProvider client={client}>test</ApolloProvider>;

export default App;
