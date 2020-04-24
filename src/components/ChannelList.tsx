import React from "react";
import { Menu, Icon, Grid } from "semantic-ui-react";
import styled from "styled-components";
import SidebarHeaderText from "./styled/SidebarHeaderText";

const StyledMenu = styled(Menu)`
  padding-left: 15px;
  padding-right: 8px;
`;

const ChannelList = ({ setIsOpen }) => (
  <div>
    <Grid columns={2}>
      <Grid.Column width={12}>
        <SidebarHeaderText>CHANNELS</SidebarHeaderText>
      </Grid.Column>
      <Grid.Column width={2}>
        <Icon inverted name='plus' link onClick={() => setIsOpen(true)} />
      </Grid.Column>
    </Grid>
    <StyledMenu inverted fluid secondary vertical>
      <Menu.Item name='general' content='# general' active />
      <Menu.Item name='graphql' content='# graphql' onClick={() => console.log("click")} />
    </StyledMenu>
  </div>
);

export default ChannelList;
