import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements'

class AuthScreen extends Component {
  static navigationOptions = ({ navigation }) => {
   return { headerRight: (
       <View style={{ marginRight: 15 }}>
         <Icon
           name='check'
           onPress={() => navigation.navigate('overView')}
           color='#ff5555'
         />
       </View>
    )
  };

   }

  render() {
    return (
      <View style={{ marginTop: 50 }}>
        <Text>AuthScreen</Text>
        <Text>AuthScreen</Text>
        <Text>AuthScreen</Text>
        <Text>AuthScreen</Text>
        <Text>AuthScreen</Text>
      </View>
    );
  }
}

export default AuthScreen;
