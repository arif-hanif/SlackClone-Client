import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://slackclone-server.herokuapp.com/",
});

export default client;
