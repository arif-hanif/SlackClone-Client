import React from "react";
import { Menu, Icon, Grid } from "semantic-ui-react";
import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";

import SidebarHeaderText from "./styled/SidebarHeaderText";
import { CHANNELS_GQL } from "../gql/channels";

const StyledMenu = styled(Menu)`
  padding-left: 15px;
  padding-right: 8px;
`;

const ChannelList = ({ setIsOpen, channelId }) => {
  const { data, loading, error } = useQuery(CHANNELS_GQL);

  if (loading) {
    return <div>loading...</div>;
  } else if (error) {
    return <div>error channel list</div>;
  }

  return (
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
        {data.channels.map((i) => (
          <Menu.Item key={i.id} name={i.name} content={`# ${i.name}`} active={channelId === i.id} />
        ))}
      </StyledMenu>
    </div>
  );
};
export default ChannelList;
