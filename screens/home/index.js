import React, { Component } from 'react';
import {
  // View,
  Switch,
  // ListView,
} from 'react-native';
import { Container, Text, Body, Right, Fab, Icon, Header, Left, Badge, Card, CardItem, Button, Content } from 'native-base';

// import styles from './styles';
// import Header from '../../Header';

class Home extends Component {
  // static navigationOptions = {
  //   title: 'Home',
  // };

  constructor(props) {
    super(props);
    const tasks = [{
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
    }];
    console.log('Old tasks:', tasks);
    const task = this.props.navigation.state.params ?
      this.props.navigation.state.params.task : null;
    const index = this.props.navigation.state.params ?
      this.props.navigation.state.params.index : null;
    console.log('index:', index);
    console.log('show new task:', task);
    if (task && (index || index === 0)) {
      console.log('edit task list');
      tasks[index] = task;
    } else if (task) {
      console.log('add new to tasks list');
      tasks.push(task);
    }

    console.log('New tasks:', tasks);

    this.state = {
      tasksList: tasks,
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
      switchActive: false,
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

  taskDone(index) {
    console.log('Index of task:', index);
    const tasks = this.state.tasksList;
    tasks[index].completed = !tasks[index].completed;

    this.setState({
      tasksList: tasks,
      switchActive: !this.state.switchActive,
    });
  }

  deleteTask(task, index) {
    const { tasksList } = this.state;
    tasksList.splice(index, 1);
    this.setState({
      tasksList,
    });
  }

  // showCard(item) {
  //   console.log('Show task card:', item);
  //   this.setState({
  //   });
  // }
  render() {
    // const tasks = this.state.tasksList;
    console.log(this.state.tasksList);
    console.log('switchActive: ', this.state.switchActive);
    return (
      <Container>
        <Header />
        <Content>
          {this.state.tasksList.map((task, index) => (
            <Card key={task.id}>
              <CardItem>
                <Left>
                  <Icon name="md-list-box" />
                  <Body>
                    <Text>{task.title}</Text>
                    <Text note>{task.collection.name}</Text>
                  </Body>
                </Left>
                <Right>
                  <Badge
                    style={{ backgroundColor: task.user ? task.user.color : 'black' }}
                  >
                    <Text>{task.user ? task.user.name : 'no user'}</Text>
                  </Badge>
                </Right>
              </CardItem>
              <CardItem>
                <Left>
                  <Button
                    transparent
                    onPress={() => this.props.navigation.navigate('CreateEditTask', {
                      collectionList: this.state.collectionList,
                      userList: this.state.userList,
                      task,
                      index,
                    })}
                  >
                    <Icon name="ios-create" />
                    <Text>Edit</Text>
                  </Button>
                </Left>
                <Body>
                  <Button
                    transparent
                    onPress={() => this.deleteTask(task, index)}
                  >
                    <Icon active name="ios-archive" />
                    <Text>Delete</Text>
                  </Button>
                </Body>
                <Right>
                  <Switch
                    value={task.completed}
                    onValueChange={() => this.taskDone(index)}
                  />
                </Right>
              </CardItem>
            </Card>
          ))}
        </Content>
        <Fab
          active={this.state.fabActive}
          containerStyle={{ }}
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight"
          onPress={() => this.props.navigation.navigate('CreateEditTask', {
            collectionList: this.state.collectionList,
            userList: this.state.userList,
            task: null,
            index: null,
          })}
        >
          <Icon name="add" />
        </Fab>
      </Container>
    );
  }
}

export default Home;

// <List
//   dataArray={this.state.tasksList}
//   renderRow={(item, x, index) => (
//     <ListItem
//       icon
//       onPress={() => this.props.navigation.navigate('ShowTask', {
//         task: item,
//       })}
//     >
//       <Left>
//         <Icon name="text" />
//       </Left>
//       <Body>
//         <Text>{item.title}</Text>
//         <Text note>{item.collection ? item.collection.name : ''}</Text>
//       </Body>
//       <Right>
//         {item.user ?
//           <Badge
//             style={{ backgroundColor: item.user.color }}
//           >
//             <Text>{item.user.name}</Text>
//           </Badge> : null}
//         <Switch
//           value={item.completed /* this.state.switchActive */}
//           onValueChange={() => this.taskDone(index)}
//         />
//       </Right>
//     </ListItem>
//   )}
// />
