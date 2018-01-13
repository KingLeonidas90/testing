import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { Icon } from 'react-native-elements';

class CreateGroupScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Neue Gruppe',
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
            onPress={() => navigation.navigate('overView')}
            color='white'
          />
        </View>
      ),

      headerLeft: (
        <View style={{ marginLeft: 15 }}>
         <Icon
           name='clear'
           color='white'
           onPress={() => navigation.navigate('overView')}
         />
       </View>
        )

};
  }
  render() {
    return (
      <View>
        <Text>CreateGroupScreen</Text>
        <Text>CreateGroupScreen</Text>
        <Text>CreateGroupScreen</Text>
        <Text>CreateGroupScreen</Text>
        <Text>CreateGroupScreen</Text>
      </View>
    );
  }
}

export default CreateGroupScreen;
