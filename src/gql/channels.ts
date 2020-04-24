import { gql } from "apollo-boost";

export const CHANNELS_GQL = gql`
  query CHANNELS($filter: ChannelFilter, $sort: ChannelSort) {
    channels(where: $filter, order_by: $sort) {
      id
      name
    }
  }
`;

export const CHANNEL_MESSAGES_GQL = gql`
  query CHANNEL_MESSAGES($filter: ChannelMessageFilter, $sort: ChannelMessageSort) {
    channelMessages(where: $filter, order_by: $sort) {
      id
      text
      createdAtUTC
    }
  }
`;
