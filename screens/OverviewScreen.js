import React, { Component } from 'react';
import { View, Text, ActivityIndicator, Platform } from 'react-native';
import { Button, Card, Icon } from 'react-native-elements';
import ActionButton from 'react-native-action-button';

class OverviewScreen extends Component {
  static navigationOptions = () => {
   return {
       tabBarIcon: ({ tintColor }) => {
         return <Icon name="star" size={20} color={tintColor} />;
        },
        // Sorgt dafür, dass die StackBar ausgeblendet wird
   header: null
       };
   }
  render() {
    return (
      <View style={{ marginTop: 50, flex: 1 }}>
        <ActionButton
          buttonColor="#ff5055"
          onPress={() => { this.props.navigation.navigate('createGroup') }}
        />
      </View>
    );
  }
}

export default OverviewScreen;
