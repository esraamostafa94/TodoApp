import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { Container, Form, Item, Input, Icon, Content, Header, Picker } from 'native-base';

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
        <Header />
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
              <Item label="Choose color" value={0} enabled={false} />
              {colors.map(item => (
                <Item label={item} value={item} />
              ))}
            </Picker>
          </Form>
        </Content>
        <View style={{ flex: 1, width: 'auto', justifyContent: 'flex-end' }}>
          <Button
            title="Add User"
            color="#841584"
            onPress={() => this.pressOnAddUser()}
          />
        </View>
      </Container>
    );
  }
}

export default CreateUser;
