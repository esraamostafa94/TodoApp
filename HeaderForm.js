import React, { Component } from 'react';
// import { View } from 'react-native';
import { Header, Left, Body, Button, Icon, Title } from 'native-base';

class TodoHeader extends Component {
  constructor() {
    super();

    this.state = {
    };
  }

  render() {
    return (
      <Header>
        <Left>
          <Button transparent>
            <Icon
              name="ios-arrow-back"
              onPress={() => this.props.navigation.goBack()}
            />
          </Button>
        </Left>
        <Body>
          <Title>{this.props.headerTitle}</Title>
        </Body>
      </Header>
    );
  }
}

// TodoHeader.propTypes = {
//   headerTitle: PropTypes.string.isRequired,
// };

export default TodoHeader;
