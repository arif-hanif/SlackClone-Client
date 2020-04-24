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

export const ADD_MESSAGE_TO_CHANNEL_GQL = gql`
  mutation ADD_MESSAGE_TO_CHANNEL_GQL($input: AddMessageToChannelInput) {
    addMessageToChannel(input: $input)
  }
`;
