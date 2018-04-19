import React, { Component } from 'react';
import { ImageBackground, View, StatusBar } from 'react-native';
import { Container, Button, H3, Text } from 'native-base';

import styles from './styles';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      posts: [],
    };
  }

  async componentDidMount() {
    try {
      const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json());

      this.setState({
        posts,
      });
    } catch (e) {
      console.log(e);
      console.error(e);
    }
  }

  render() {
    return (
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
          <H3 style={styles.text}>Fetch test</H3>
          <View style={{ marginTop: 8 }} />
          <H3>Fetch count: {this.state.posts.length}</H3>
        </View>
      </Container>
    );
  }
}

export default Home;
