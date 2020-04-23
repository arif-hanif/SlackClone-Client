import React from "react";
import SidebarContainer from "../components/styled/SidebarContainer";
import ChannelList from "./ChannelList";
import DirectMessageUsers from "./DirectMessageUsers";
import CreateChannelModal from "./CreateChannelModal";
import DirectMessageModal from "./DirectMessageModal";

const Sidebar = () => (
  <SidebarContainer>
    <ChannelList />
    <DirectMessageUsers />
    <CreateChannelModal />
    <DirectMessageModal />
  </SidebarContainer>
);

export default Sidebar;
