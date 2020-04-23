import React from "react";
import { Menu, Header, Icon, Grid } from "semantic-ui-react";

const ChannelList = () => (
  <div>
    <Grid columns={2}>
      <Grid.Column>
        <Header as='h5' inverted content='Channels' />
      </Grid.Column>
      <Grid.Column textAlign='right'>
        <Icon inverted name='plus' link />
      </Grid.Column>
    </Grid>
    <Menu inverted fluid secondary vertical>
      <Menu.Item name='general' content='# general' active />
      <Menu.Item name='graphql' content='# graphql' />
    </Menu>
  </div>
);

export default ChannelList;
