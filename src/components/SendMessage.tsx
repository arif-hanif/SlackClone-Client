import React from "react";
import { Input } from "semantic-ui-react";
import styled from "styled-components";

const SendMessageWrapper = styled.div`
  padding: 8px;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 60px;
  background: GhostWhite;
`;

const SendMessage = () => (
  <SendMessageWrapper>
    <Input focus fluid action={{ icon: "send" }} placeholder='Message...' />
  </SendMessageWrapper>
);

export default SendMessage;
