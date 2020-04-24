import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://slackclone-server.herokuapp.com/",
  request: (operation) => {
    const token = localStorage.getItem("token");
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
});

export default client;
