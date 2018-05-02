import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { Container, Form, Item, Input, Picker, Icon, Content, Header } from 'native-base';

class CreateTask extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      collection: '',
      user: '',
      titleError: false,
      collectionError: false,
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
      const newTask = {
        id: 5,
        title: this.state.title,
        completed: false,
      };

      const collectionList = this.props.navigation.state.params.collectionList ?
        this.props.navigation.state.params.collectionList : [];
      collectionList.forEach((item) => {
        if (item.id === this.state.collection) {
          newTask.collection = item;
        }
      });

      if (this.state.user) {
        const userList = this.props.navigation.state.params.userList ?
          this.props.navigation.state.params.userList : [];
        userList.forEach((item) => {
          if (item.id === this.state.collection) {
            newTask.user = item;
          }
        });
      }

      console.log('new task before send:', newTask);
      this.props.navigation.navigate('Home', {
        newTask,
      });
    }
  }

  render() {
    console.log('Task title:', this.state.title);
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item error={this.state.titleError}>
              <Input
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
              <Item label="Choose collection" value={0} enabled={false} />
              {this.props.navigation.state.params.collectionList.map(item => (
                <Item label={item.name} value={item.id} />
              ))}
            </Picker>
            <Picker
              mode="dropdown"
              style={{ width: 'auto' }}
              placeholder="Choose user"
              selectedValue={this.state.user}
              onValueChange={value => this.setState({ user: value })}
            >
              <Item label="Choose user" value={0} enabled={false} />
              {this.props.navigation.state.params.userList.map(item => (
                <Item label={item.name} value={item.id} />
              ))}
            </Picker>
          </Form>
        </Content>
        <View style={{ flex: 1, width: 'auto', justifyContent: 'flex-end' }}>
          <Button
            title="Add Task"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            onPress={() => this.pressOnAddTask()}
          />
        </View>
      </Container>
    );
  }
}

// TodoHeader.propTypes = {
//   headerTitle: PropTypes.string.isRequired,
// };

export default CreateTask;
