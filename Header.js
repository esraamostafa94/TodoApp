import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Header, Left, Body, Button, Icon, Title } from 'native-base';

class TodoHeader extends Component {
  constructor() {
    super();

    this.state = {
    };
  }

  render() {
    return (
      <Container>
        <View
          style={{
            // alignItems: 'center',

            backgroundColor: 'transparent',
          }}
        >
          <Header toolbarDefaultBg="#008080" toolbarHeight="200" >
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
      </Container>
    );
  }
}

// TodoHeader.propTypes = {
//   headerTitle: PropTypes.string.isRequired,
// };

export default TodoHeader;
