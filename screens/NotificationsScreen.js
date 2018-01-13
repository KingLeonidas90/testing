import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Card, Icon } from 'react-native-elements';

class NotificationsScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="access-time" size={20} color={tintColor} />;
},
    header: null
  }
  render() {
    return (
      <View style={{ marginTop: 50 }}>
        <Button onPress={() => this.props.navigation.navigate('createNotification')} title=' ich bims' />
      </View>
    );
  }
}

export default NotificationsScreen;
