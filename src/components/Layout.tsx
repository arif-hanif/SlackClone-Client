import React from "react";
import Container from "./styled/Container";
import Sidebar from "./Sidebar";
import MessageList from "./MessageList";
import SendMessage from "./SendMessage";
import ChannelHeader from "./ChannelHeader";
import styled from "styled-components";

const MessagesContainer = styled.div`
  padding: 15px;
  margin-left: 250px;
  position: absolute;
  color: #958993;
  height: 100vh;
  width: calc(100% - 250px);
`;

const Layout = () => (
  <Container>
    <Sidebar />
    <MessagesContainer>
      <ChannelHeader />
      <MessageList />
      <SendMessage />
    </MessagesContainer>
  </Container>
);

export default Layout;
