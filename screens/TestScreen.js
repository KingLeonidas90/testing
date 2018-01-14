import React, { Component } from 'react';
import { Text, View, Button, Modal, StyleSheet, Animated } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { FormLabel, FormInput } from 'react-native-elements'

class TestScreen extends React.Component {
  state = {
  phone: '',
};

  render() {
     const { phone } = this.state;
    return (
      <TextField
         label='Phone number'
         labelColor='red'
         value={phone}
         onChangeText={ (phone) => this.setState({ phone }) }
       />
      // <View>
      //   <FormLabel>Name</FormLabel>
      //   <FormInput />
      //   <Button title='Submit' />
      // </View>
    );
  }
}

export default TestScreen;
