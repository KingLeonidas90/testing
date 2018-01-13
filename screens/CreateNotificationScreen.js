import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { Button, Icon } from 'react-native-elements';

class CreateNotification extends Component {
  static navigationOptions = ({ navigation }) => {
    const { goBack } = navigation;
    return {
      headerTitle: 'Neue Benachrichtigung',
      tabBarVisible: false,
      swipeEnabled: false,

      headerStyle: {
      justifyContent: 'center',
      backgroundColor: '#ff5055',
      // marginTop: Platform.OS === 'android' ? 24 : 0
      },

      headerTitleStyle: {
        color: 'white'
      },

      headerRight: (
        <View style={{ marginRight: 15 }}>
          <Icon
            name='check'
            onPress={() => navigation.navigate('notification')}
            color='white'
          />
        </View>
      ),

      headerLeft: (
        <View style={{ marginLeft: 15 }}>
         <Icon
           name='clear'
           color='white'
           onPress={() => goBack()}
         />
       </View>
        )

};
  }
  render() {
    return (
      <View>
        <Text>CreateNotification</Text>
        <Text>CreateNotification</Text>
        <Text>CreateNotification</Text>
        <Text>CreateNotification</Text>
        <Text>CreateNotification</Text>
      </View>
    );
  }
}

export default CreateNotification;
