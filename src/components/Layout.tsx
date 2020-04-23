import React from "react";
import Container from "./styled/Container";
import Sidebar from "./Sidebar";
import Header from "./SidebarHeader";
import MessageList from "./MessageList";
import SendMessage from "./SendMessage";

const Layout = () => (
  <Container>
    <Sidebar />
    <Header channelName='test' />
    <MessageList />
    <SendMessage />
  </Container>
);

export default Layout;
