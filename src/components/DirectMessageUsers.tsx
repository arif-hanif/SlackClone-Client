import React from "react";
import { Menu, Header } from "semantic-ui-react";

const DirectMessageUsers = () => (
  <div>
    <Header as='h5' inverted content='Direct Message Users' />
    <Menu inverted fluid secondary vertical>
      <Menu.Item name='general' active />
      <Menu.Item name='graphql' content='# graphql' />
    </Menu>
  </div>
);

export default DirectMessageUsers;
