import { gql } from "apollo-boost";

export const CHANNELS_GQL = gql`
  query {
    channels {
      id
      name
    }
  }
`;
