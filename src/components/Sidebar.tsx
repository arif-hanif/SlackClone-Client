import React, { useState } from "react";
import SidebarContainer from "../components/styled/SidebarContainer";
import ChannelList from "./ChannelList";
//import DirectMessageUsers from "./DirectMessageUsers";
import CreateChannelModal from "./CreateChannelModal";
//import DirectMessageModal from "./DirectMessageModal";
import SidebarHeader from "./SidebarHeader";

const Sidebar = () => {
  const [isCreateChannelModalOpen, setCreateChannelModalIsOpen] = useState(false);
  //const [isDirectMessageModalOpen, setDirectMessageModalOpen] = useState(false);

  return (
    <SidebarContainer>
      <SidebarHeader />
      <ChannelList setIsOpen={setCreateChannelModalIsOpen} />
      <CreateChannelModal
        isOpen={isCreateChannelModalOpen}
        setIsOpen={setCreateChannelModalIsOpen}
      />
      {/*<DirectMessageUsers setIsOpen={setDirectMessageModalOpen} />
      <DirectMessageModal isOpen={isDirectMessageModalOpen} setIsOpen={setDirectMessageModalOpen} />*/}
    </SidebarContainer>
  );
};

export default Sidebar;
