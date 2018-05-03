import React from 'react';
import {
  Text,
  List,
  ListItem,
  Container,
  Content,
  Header,
  // View,
} from 'native-base';
import styles from './styles';

const datas = [
  {
    name: 'TODO List',
    route: 'Home',
    icon: 'home',
    bg: '#C5F442',
  },
  {
    name: 'Collection List',
    route: 'Collection',
    icon: 'phone-portrait',
    bg: '#C5F442',
  },
  {
    name: 'User List',
    route: 'User',
    icon: 'phone-portrait',
    bg: '#C5F442',
  },
];

const SideBar = props => (
  <Container>
    <Header />
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
            <Text style={styles.text}>{item.name}</Text>
          </ListItem>
        )}
      />
    </Content>
  </Container>
);

export default SideBar;
