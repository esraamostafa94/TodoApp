import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { Container, Form, Item, Label, Input, Picker, Icon, Text, Content } from 'native-base';

class CreateTask extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
    };
  }

  render() {
    console.log('Task title:', this.state.title);
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Task title</Label>
              <Input onChangeText={text => this.setState({ title: text })} />
            </Item>
          </Form>
        </Content>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
          <Button
            title="Add Task"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            onPress={() => this.props.navigation.navigate('Home', {
                taskId: 5,
                taskTitle: this.state.title,
              })}
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
