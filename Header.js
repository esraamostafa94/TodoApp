import React from 'react';
import { Header, Left, Body, Button, Icon, Title } from 'native-base';


const TodoHeader = props => (
  <Header toolbarDefaultBg="#008080" toolbarHeight="200" >
    <Left>
      <Button transparent>
        <Icon name="menu" />
      </Button>
    </Left>
    <Body>
      <Title>{props.headerTitle}</Title>
    </Body>
  </Header>
);

// TodoHeader.propTypes = {
//   headerTitle: PropTypes.string.isRequired,
// };

export default TodoHeader;
