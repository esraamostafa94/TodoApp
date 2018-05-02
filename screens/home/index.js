import React, { Component } from 'react';
import {
  View,
  // ListView,
} from 'react-native';
import { Container, Text, List, ListItem, Body, Right, Fab, Icon, Header, DeckSwiper, Card, CardItem, Left, Badge } from 'native-base';

// import styles from './styles';
// import Header from '../../Header';

class Home extends Component {
  // static navigationOptions = {
  //   title: 'Home',
  // };

  constructor(props) {
    super(props);
    // this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1.id !== r2.id });
    this.state = {
      tasksList: [{
        id: 1,
        title: 'task1',
        completed: false,
        collection: {
          id: 1,
          name: 'collection1',
        },
        user: {
          id: 1,
          name: 'user1',
          color: 'teal',
        },
      }, {
        id: 2,
        title: 'task2',
        completed: true,
        collection: {
          id: 1,
          name: 'collection1',
        },
      }],
      collectionList: [{
        id: 1,
        name: 'collection1',
      }, {
        id: 2,
        name: 'collection2',
      }],

      userList: [{
        id: 1,
        name: 'user1',
        color: 'teal',
      }, {
        id: 2,
        name: 'user2',
        color: 'brown',
      }],

      fabActive: true,
    };
  }

  async componentDidMount() {
    // console.log('componentDidMount');
    // let tasksList = [];
    // const URL = 'http://localhost:3000';
    // try {
    //   tasksList = await fetch('http://localhost:3000/tasks').then(res => res.json());
    //   console.log(tasksList);
    //   this.setState({
    //     tasksList,
    //   });
    // } catch (e) {
    //   console.log('Error o get tastks list:', e);
    // }
  }

  // deleteRow(secId, rowId, rowMap) {
  //   console.log('delete');
  //   console.log('deleteRow', secId, rowId, rowMap);
  //   const tasks = this.state.tasksList;
  //   this.setState({
  //     // fabActive: true,
  //   });
  // }

  showCard(item) {
    console.log('Show task card:', item);
    this.setState({
      // fabActive: true,
    });
  }
  render() {
    const tasks = this.state.tasksList;
    if (this.props.navigation.state.params
      && this.props.navigation.state.params.newTask) {
      console.log('New task:', this.props.navigation.state.params.newTask);
      tasks.push(this.props.navigation.state.params.newTask);
    }
    console.log('Tasks:', tasks);

    return (
      <Container>
        <View
          style={{
            // alignItems: 'center',
            marginBottom: 20,
            marginTop: 0,
            backgroundColor: 'transparent',
          }}
        >
          <Header />
          <List
            dataArray={tasks}
            renderRow={item => (
              <ListItem
                avatar
                onPress={() => (
                  <DeckSwiper
                    dataSource={tasks}
                    renderItem={task => (
                      <Card style={{ elevation: 3 }}>
                        <CardItem>
                          <Left>
                            <Body>
                              <Text>{task.title}</Text>
                              <Text note>{task.collection.name}</Text>
                            </Body>
                          </Left>
                        </CardItem>
                        <CardItem>
                          <Icon name="heart" style={{ color: '#ED4A6A' }} />
                          <Text>{task.title}</Text>
                        </CardItem>
                      </Card>
                    )}
                  />
                )}
              >
                <Body>
                  <Text>{item.title}</Text>
                  <Text note>{item.collection ? item.collection.name : ''}</Text>
                </Body>
                <Right>
                  {item.user ?
                    <Badge
                      style={{ backgroundColor: item.user.color }}
                    >
                      <Text>{item.user.name}</Text>
                    </Badge> : null}
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
          onPress={() => this.props.navigation.navigate('CreateTask', {
            collectionList: this.state.collectionList,
            userList: this.state.userList,
          })}
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
