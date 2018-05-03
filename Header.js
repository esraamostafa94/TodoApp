import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Left, Body, Button, Icon, Title } from 'native-base';

class TodoHeader extends Component {
  constructor() {
    super();

    this.state = {
    };
  }

  render() {
    return (
      <View
        style={{
          // marginBottom: 20,
          marginTop: 20,
          // borderStyle: 'dashed',
          // backgroundColor: 'transparent',
        }}
      >
        <Header>
          <Left>
            <Button transparent>
              <Icon
                name="menu"
                onPress={() => this.props.navigation.navigate('DrawerOpen')}
              />
            </Button>
          </Left>
          <Body>
            <Title>{this.props.headerTitle}</Title>
          </Body>
        </Header>
      </View>

    );
  }
}

// TodoHeader.propTypes = {
//   headerTitle: PropTypes.string.isRequired,
// };

export default TodoHeader;
