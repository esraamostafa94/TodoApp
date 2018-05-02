import React, { Component } from 'react';
import {
  View,
  // ListView,
} from 'react-native';
import {
  Container,
  Text,
  List,
  ListItem,
  Body,
  Fab,
  Icon,
  Header,
} from 'native-base';

// import styles from './styles';
// import Header from '../../Header';

class Collection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collectionList: [{
        id: 1,
        name: 'collection1',
        noTask: 3,
      }, {
        id: 2,
        name: 'collection2',
        noTask: 5,
      }],
      fabActive: true,
    };
  }
  render() {
    const collections = this.state.collectionList;
    if (this.props.navigation.state.params
      && this.props.navigation.state.params.newCollection) {
      const { newCollection } = this.props.navigation.state.params;
      newCollection.noTask = 0;
      console.log('New collection:', newCollection);
      collections.push(newCollection);
    }
    console.log('collections:', collections);

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
            dataArray={collections}
            renderRow={item => (
              <ListItem
                avatar
              >
                <Body>
                  <Text>{item.name}</Text>
                  <Text note>{`${item.noTask ? item.noTask : 0} tasks`}</Text>
                </Body>
              </ListItem>
            )}
          />
        </View>
        <Fab
          active={this.state.fabActive}
          containerStyle={{ }}
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight"
          onPress={() => this.props.navigation.navigate('CreateCollection')}
        >
          <Icon name="add" />
        </Fab>
      </Container>
    );
  }
}

export default Collection;
