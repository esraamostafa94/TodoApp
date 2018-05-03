import React, { Component } from 'react';
// import { View, Button } from 'react-native';
import { Container, Form, Item, Input, Icon, Content, Picker, Text, Button } from 'native-base';
import Header from '../../HeaderForm';

class CreateUser extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      color: '',
      nameError: false,
      colorError: false,
    };
  }

  pressOnAddUser() {
    if (!this.state.name) {
      this.setState({
        nameError: true,
      });
    } else if (!this.state.color || this.state.color === 0) {
      this.setState({
        colorError: true,
      });
    } else {
      const newUser = {
        id: 5,
        name: this.state.name,
        color: this.state.color,
      };

      console.log('new user before send:', newUser);
      this.props.navigation.navigate('User', {
        newUser,
      });
    }
  }

  render() {
    console.log('username:', this.state.name);
    const colors = ['teal', 'red', 'orange', 'yellow', 'olive', 'green',
      'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black'];
    return (
      <Container>
        <Header
          headerTitle="Add New User"
          navigation={this.props.navigation}
        />
        <Content>
          <Form>
            <Item error={this.state.nameError}>
              <Input
                onChangeText={text => this.setState({ name: text, nameError: false })}
                placeholder="Enter username"
              />
              {this.state.nameError ? <Icon name="close-circle" /> : null}
            </Item>
            <Picker
              mode="dropdown"
              style={this.state.colorError ? { width: 'auto', color: '#FF0000' } : { width: 'auto' }}
              placeholder="Choose user color"
              selectedValue={this.state.color}
              onValueChange={value => this.setState({ color: value, colorError: false })}
            >
              <Item label="Choose color" value={0} enabled={false} key={0} />
              {colors.map(item => (
                <Item label={item} value={item} key={item} />
              ))}
            </Picker>
          </Form>
        </Content>
        <Button block onPress={() => this.pressOnAddUser()}>
          <Text>Add User</Text>
        </Button>
      </Container>
    );
  }
}

export default CreateUser;
