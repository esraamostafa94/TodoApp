import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Text, List, ListItem, Body, Right, Fab, Icon } from 'native-base';

// import styles from './styles';
// import TodoHeader from '../../Header';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      tasksList: [{
        id: 1,
        title: 'task1',
        collection: {
          id: 1,
          name: 'collection1',
        },
        user: {
          id: 1,
          name: 'user1',
        },
      }, {
        id: 2,
        title: 'task2',
      }],
      fabActive: true,
      // headerTitle: 'TODO List',
    };
  }

  async componentDidMount() {
    // try {
    //   const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(res => res.json());
    //
    //   this.setState({
    //     posts,
    //   });
    // } catch (e) {
    //   console.log(e);
    //   console.error(e);
    // }
  }

  render() {
    console.log('Tasks:', this.state.tasksList);
    console.log('props:', this.props.navigation.state.params);
    if (this.props.navigation.state.params
      && this.props.navigation.state.params.taskId
      && this.props.navigation.state.params.taskTitle) {
      console.log('New task:', this.props.navigation.state.params.taskTitle);
      const tasks = this.state.tasksList;
      tasks.push({
        id: this.props.navigation.state.params.taskId,
        title: this.props.navigation.state.params.taskTitle,
      });
      // this.setState({
      //   tasksList: tasks,
      // });
    }
    return (
      <Container>
        <View
          style={{
            // alignItems: 'center',
            marginBottom: 20,
            marginTop: 20,
            backgroundColor: 'transparent',
          }}
        >
          <List
            dataArray={this.state.tasksList}
            renderRow={item => (
              <ListItem avatar>
                <Body>
                  <Text>{item.title}</Text>
                  <Text note>{item.collection ? item.collection.name : ''}</Text>
                </Body>
                <Right>
                  <Text note>{item.user ? item.user.name : ''}</Text>
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
          onPress={() => this.props.navigation.navigate('CreateTask')}
        >
          <Icon name="add" />
        </Fab>

      </Container>
    );
  }
}

export default Home;

// <Container>
//   <StatusBar barStyle="light-content" />
//   <View
//     style={{
//       alignItems: 'center',
//       marginBottom: 50,
//       backgroundColor: 'transparent',
//     }}
//   >
//     <View style={{ marginTop: 50 }} />
//     <H3>My Home screen</H3>
//     <View style={{ marginTop: 8 }} />
//     <H3 style={styles.text}>Fetch test</H3>
//     <View style={{ marginTop: 8 }} />
//     <H3>Fetch count: {this.state.posts.length}</H3>
//   </View>
// </Container>
