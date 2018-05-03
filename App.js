import React from 'react';
import * as Expo from 'expo';

import { Root, StyleProvider } from 'native-base';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

import getTheme from './theme/components';
import variables from './theme/variables/commonColor';

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

  SideBar: { screen: SideBar },
}, {
  initialRouteName: 'Drawer',
  headerMode: 'none',
});

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      isReady: false,
    };

    this.loadFonts();
  }
  async loadFonts() {
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf'),
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <StyleProvider style={getTheme(variables)}>
        <Root style={{ marginTop: 20 }}>
          <AppNavigator />
        </Root>
      </StyleProvider>
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
