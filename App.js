import React from 'react';
// import {
//   // StyleSheet,
//   //  Text,
//   // View,
// } from 'react-native';
import { Root } from 'native-base';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

import Home from './screens/home';
import SideBar from './screens/sidebar';
import Collection from './screens/collection';
import User from './screens/user';

import CreateEditTask from './screens/home/CreateEditTask';
// import EditTask from './screens/home/EditTask';
import CreateCollection from './screens/collection/CreateCollection';
import CreateUser from './screens/user/CreateUser';

const Drawer = DrawerNavigator({
  Home: { screen: Home },
  Collection: { screen: Collection },
  User: { screen: User },
}, {
  initialRouteName: 'Home',
  contentOptions: {
    activeTintColor: '#e91e63',
  },
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
  contentComponent: props => <SideBar {...props} />,
});

// All navigation
const AppNavigator = StackNavigator({
  Drawer: { screen: Drawer },
  CreateEditTask: { screen: CreateEditTask },
  // EditTask: { screen: EditTask },
  CreateCollection: { screen: CreateCollection },
  CreateUser: { screen: CreateUser },
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
