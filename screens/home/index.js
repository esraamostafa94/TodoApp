import React from 'react';
import { ImageBackground, View, StatusBar } from 'react-native';
import { Container, Button, H3, Text } from 'native-base';

import styles from './styles';

const Home = () => (
  <Container>
    <StatusBar barStyle="light-content" />
    <View
      style={{
        alignItems: 'center',
        marginBottom: 50,
        backgroundColor: 'transparent',
      }}
    >
      <View style={{ marginTop: 50 }} />
      <H3>My Home screen</H3>
      <View style={{ marginTop: 8 }} />
      <H3 style={styles.text}>NativeBase components</H3>
      <View style={{ marginTop: 8 }} />
    </View>
  </Container>
);

export default Home;
