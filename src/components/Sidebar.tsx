import React from "react";
import SidebarContainer from "../components/styled/SidebarContainer";
import ChannelList from "./ChannelList";
import DirectMessageUsers from "./DirectMessageUsers";
import CreateChannelModal from "./CreateChannelModal";
import DirectMessageModal from "./DirectMessageModal";
import SidebarHeader from "./SidebarHeader";

const Sidebar = () => (
  <SidebarContainer>
    <SidebarHeader />
    <ChannelList />
    <DirectMessageUsers />
    <CreateChannelModal />
    <DirectMessageModal />
  </SidebarContainer>
);

export default Sidebar;
