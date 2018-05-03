import React, { Component } from 'react';
// import { View, Button } from 'react-native';
import { Container, Form, Item, Input, Icon, Content, Text, Button } from 'native-base';
import Header from '../../HeaderForm';

class CreateCollection extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      titleError: false,
    };
  }

  pressOnAddCollection() {
    if (!this.state.title) {
      this.setState({
        titleError: true,
      });
    } else {
      const newCollection = {
        id: 5,
        name: this.state.title,
      };

      console.log('new collection before send:', newCollection);
      this.props.navigation.navigate('Collection', {
        newCollection,
      });
    }
  }

  render() {
    console.log('Collection title:', this.state.title);
    return (
      <Container>
        <Header
          headerTitle="Add New Collection"
          navigation={this.props.navigation}
        />
        <Content>
          <Form>
            <Item error={this.state.titleError}>
              <Input
                onChangeText={text => this.setState({ title: text, titleError: false })}
                placeholder="Enter collection name"
              />
              {this.state.titleError ? <Icon name="close-circle" /> : null}
            </Item>
          </Form>
        </Content>
        <Button block onPress={() => this.pressOnAddCollection()}>
          <Text>Add Collection</Text>
        </Button>

      </Container>
    );
  }
}

export default CreateCollection;
