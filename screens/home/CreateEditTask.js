import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Form, Item, Input, Picker, Icon, Content, Text, Button } from 'native-base';
import Header from '../../HeaderForm';

class CreateEditTask extends Component {
  constructor(props) {
    super(props);
    const { task, index } = this.props.navigation.state.params;
    console.log('Edit:', index);
    console.log('Edit task:', task);
    // console.log('Edit task title:', task.title);
    this.state = {
      title: task ? task.title : '',
      collection: task ? task.collection.id : '',
      user: task && task.user ? task.user.id : '',
      titleError: false,
      collectionError: false,
      task,
      index,
    };
  }

  pressOnAddTask() {
    if (!this.state.title) {
      this.setState({
        titleError: true,
      });
    } else if (!this.state.collection || this.state.collection === 0) {
      this.setState({
        collectionError: true,
      });
    } else {
      let { task } = this.state;
      if (!task) {
        // Add new task TODO
        task = {
          id: 5,
          completed: false,
        };
      }
      task.title = this.state.title;


      const collectionList = this.props.navigation.state.params.collectionList ?
        this.props.navigation.state.params.collectionList : [];
      collectionList.forEach((item) => {
        if (item.id === this.state.collection) {
          task.collection = item;
        }
      });

      if (this.state.user) {
        const userList = this.props.navigation.state.params.userList ?
          this.props.navigation.state.params.userList : [];
        userList.forEach((item) => {
          if (item.id === this.state.collection) {
            task.user = item;
          }
        });
      } else if (task) {
        task.user = null;
      }

      console.log('new task before send:', task);
      this.props.navigation.navigate('Home', {
        task,
        index: this.state.index,
      });
    }
  }

  render() {
    console.log('Task title:', this.state.title);
    // console.log('Edit:', this.state.index, this.state.task);
    return (
      <Container>
        <Header
          headerTitle={this.props.task ? 'Edit Task' : 'Add New Task'}
          navigation={this.props.navigation}
        />
        <Content>
          <Form>
            <Item error={this.state.titleError}>
              <Input
                value={this.state.title}
                onChangeText={text => this.setState({ title: text, titleError: false })}
                placeholder="Enter task"
              />
              {this.state.titleError ? <Icon name="close-circle" /> : null}
            </Item>
            <Picker
              mode="dropdown"
              style={this.state.collectionError ? { width: 'auto', color: '#FF0000' } : { width: 'auto' }}
              placeholder="Choose collection"
              selectedValue={this.state.collection}
              onValueChange={value => this.setState({ collection: value, collectionError: false })}
            >
              <Item label="Choose collection" value={0} enabled={false} key={0} />
              {this.props.navigation.state.params.collectionList.map(item => (
                <Item label={item.name} value={item.id} key={item.id} />
              ))}
            </Picker>
            <Picker
              mode="dropdown"
              style={{ width: 'auto' }}
              placeholder="Choose user"
              selectedValue={this.state.user}
              onValueChange={value => this.setState({ user: value })}
            >
              <Item label="Choose user" value={0} enabled={false} key={0} />
              {this.props.navigation.state.params.userList.map(item => (
                <Item label={item.name} value={item.id} key={item.id} />
              ))}
            </Picker>
          </Form>
        </Content>

        <Button block onPress={() => this.pressOnAddTask()}>
          <Text>{this.state.task ? 'Edit Task' : 'Add Task'}</Text>
        </Button>

      </Container>
    );
  }
}

// TodoHeader.propTypes = {
//   headerTitle: PropTypes.string.isRequired,
// };

export default CreateEditTask;
