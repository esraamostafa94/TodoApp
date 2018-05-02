import React, { Component } from 'react';
import {
  View,
  // ListView,
} from 'react-native';
import {
  Container,
  Text,
  List,
  ListItem,
  Body,
  Fab,
  Icon,
  Header,
  Badge,
  Right,
} from 'native-base';

// import styles from './styles';
// import Header from '../../Header';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [{
        id: 1,
        name: 'user1',
        color: 'pink',
        noTask: 7,
      }, {
        id: 2,
        name: 'user2',
        color: 'blue',
        noTask: 4,
      }],

      fabActive: true,
    };
  }
  render() {
    const users = this.state.userList;
    if (this.props.navigation.state.params
      && this.props.navigation.state.params.newUser) {
      const { newUser } = this.props.navigation.state.params;
      newUser.noTask = 0;
      console.log('New user:', newUser);
      users.push(this.props.navigation.state.params.newUser);
    }
    console.log('users:', users);

    return (
      <Container>
        <View
          style={{
            // alignItems: 'center',
            marginBottom: 20,
            marginTop: 0,
            backgroundColor: 'transparent',
          }}
        >
          <Header />
          <List
            dataArray={users}
            renderRow={item => (
              <ListItem>
                <Body>
                  <Badge
                    style={{ paddingVertical: 10, backgroundColor: item.color }}
                  >
                    <Text>{item.name}</Text>
                  </Badge>
                </Body>
                <Right>
                  <Text note>{`${item.noTask ? item.noTask : 0} tasks`}</Text>
                </Right>
              </ListItem>
            )}
          />
        </View>
        <Fab
          active={this.state.fabActive}
          containerStyle={{ }}
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight"
          onPress={() => this.props.navigation.navigate('CreateUser')}
        >
          <Icon name="add" />
        </Fab>
      </Container>
    );
  }
}

export default User;
