import React from 'react';
import {
  // StyleSheet,
  //  Text,
  View,
} from 'react-native';
import { Root } from 'native-base';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

import Home from './screens/home';
import SideBar from './screens/sidebar';

import CreateTask from './screens/home/CreateTask';

const Drawer = DrawerNavigator({
  Home: { screen: Home },
}, {
  initialRouteName: 'Home',
  contentOptions: {
    activeTintColor: '#e91e63',
  },
  contentComponent: props => <SideBar {...props} />,
});

// All navigation
const AppNavigator = StackNavigator({
  Drawer: { screen: Drawer },
  CreateTask: { screen: CreateTask },
}, {
  initialRouteName: 'Drawer',
  headerMode: 'none',
});

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {

    };
  }
  render() {
    return (
      <Root>
        <AppNavigator />
      </Root>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
