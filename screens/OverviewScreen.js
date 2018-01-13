import React, { Component } from 'react';
import { View, Text, ActivityIndicator, Platform } from 'react-native';
import { Button, Card, Icon } from 'react-native-elements';

class OverviewScreen extends Component {
  static navigationOptions = ({ navigation }) => {
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
      <View style={{ marginTop: 50 }}>
        <Button onPress={() => this.props.navigation.navigate('createGroup')} title=' ich bims' />
      </View>
    );
  }
}

export default OverviewScreen;
