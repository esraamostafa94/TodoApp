import React from 'react';
import {
  Text,
  List,
  ListItem,
  Container,
  Content,
} from 'native-base';
import styles from './styles';

const datas = [
  {
    name: 'Home',
    route: 'Home',
    icon: 'phone-portrait',
    bg: '#C5F442',
  },
  {
    name: 'Page 2',
    route: 'page2',
    icon: 'phone-portrait',
    bg: '#C5F442',
  },
];

const SideBar = props => (
  <Container>
    <Content
      style={{ flex: 1, backgroundColor: '#fff', top: -1 }}
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
