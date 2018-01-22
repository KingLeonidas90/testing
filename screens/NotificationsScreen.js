import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Card, Icon } from 'react-native-elements';
import ActionButton from 'react-native-action-button';

class NotificationsScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="access-time" size={20} color={tintColor} />;
}

  }
  render() {
    return (
      <View style={{ marginTop: 50, flex: 1 }}>
        <ActionButton
          buttonColor="#ff5055"
          onPress={() => { this.props.navigation.navigate('createNotification') }}
        />
      </View>
    );
  }
}

export default NotificationsScreen;
