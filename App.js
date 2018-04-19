import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Expo from 'expo';
import { Root } from 'native-base';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import RobotFont from 'native-base/Fonts/Roboto.ttf';
import RobotMediumFont from 'native-base/Fonts/Roboto_medium.ttf';

import Home from './screens/home';
import SideBar from './screens/sidebar';

const Drawer = DrawerNavigator({
  Home: { screen: Home },
}, {
  initialRouteName: 'Home',
  contentOptions: {
    activeTintColor: '#e91e63',
  },
  contentComponent: props => <SideBar {...props} />,
});

const AppNavigator = StackNavigator({
  Drawer: { screen: Drawer },
}, {
  initialRouteName: 'Drawer',
  headerMode: 'none',
});

export default class App extends React.Component {
  render() {
    return (
      <Root>
        <AppNavigator />
      </Root>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
