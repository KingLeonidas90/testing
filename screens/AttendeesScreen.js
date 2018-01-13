import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Card, Icon } from 'react-native-elements';

class AttendeesScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => {
  return <Icon name="account-multiple" size={20} color={tintColor} type='material-community' />;
}
  }
  render() {
    return (
      <View>
        <Text>AttendeesScreen</Text>
        <Text>AttendeesScreen</Text>
        <Text>AttendeesScreen</Text>
        <Text>AttendeesScreen</Text>
        <Text>AttendeesScreen</Text>
      </View>
    );
  }
}

export default AttendeesScreen;
