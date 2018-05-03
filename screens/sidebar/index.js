import React from 'react';
import {
  Text,
  List,
  ListItem,
  Container,
  Content,
  Header,
  Icon,
  Left,
  // View,
} from 'native-base';
import { View } from 'react-native';

import styles from './styles';

const datas = [
  {
    name: 'TODO List',
    route: 'Home',
    icon: 'md-list-box',
    bg: '#C5F442',
  },
  {
    name: 'Collection List',
    route: 'Collection',
    icon: 'ios-list',
    bg: '#C5F442',
  },
  {
    name: 'User List',
    route: 'User',
    icon: 'ios-person',
    bg: '#C5F442',
  },
];

const SideBar = props => (
  <Container>
    <View
      style={{
        marginTop: 20,
      }}
    >
      <Header />
    </View>
    <Content
      style={{ flex: 1, backgroundColor: '#fff', top: 1 }}
    >
      <List
        dataArray={datas}
        renderRow={item => (
          <ListItem
            button
            noBorder
            onPress={() => props.navigation.navigate(item.route)}
          >
            <Left>
              <Icon
                active
                name={item.icon}
                style={{ color: '#777', fontSize: 26, width: 30 }}
              />
              <Text style={styles.text}>{item.name}</Text>
            </Left>

          </ListItem>
        )}
      />
    </Content>
  </Container>
);

export default SideBar;
