import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';
import AttendeesScreen from './screens/AttendeesScreen';
import CreateNotificationScreen from './screens/CreateNotificationScreen';
import CreateGroupScreen from './screens/CreateGroupScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import OverviewScreen from './screens/OverviewScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import AuthScreen from './screens/AuthScreen';
// use height, weight and fontSize of device screen
// import { width, height, totalSize } from 'react-native-dimension';

export default class App extends React.Component {
  render() {
const MainNavigator = TabNavigator({
  // welcome ist unser key, er stellt den router für den welcomeScreen
  welcome: { screen: WelcomeScreen },
  auth: { screen: AuthScreen },
  main: {
    screen: TabNavigator({
      overview: { screen: OverviewScreen },
      attendees: { screen: AttendeesScreen },
      review: {
        screen: StackNavigator({
          review: { screen: AttendeesScreen },
          settings: { screen: NotificationsScreen }
        })
      }

  }, {
    // tabBarPosition: 'bottom',
    tabBarOptions: {
      labelStyle: { fontSize: 12 },
      showIcon: true,
      iconStyle: { width: 30 }

    }
  })
  }
}, {
  // navigationOptions: {
  //   tabBarVisible: false
  // },
  // durch false kann man nicht mehr durchs swipen durch die jeweiligen Tabs switchen
  swipeEnabled: true,
  // Each screen will not mount/load until user clicks on them
lazy: true,
animationEnabled: false,
// tabBarPosition: 'bottom',
// // tabBarOptions: {
// //   showIcon: true,
// //         iconStyle: {
// //           width: 30,
// //           height: 30 }
// }
});

    return (
      <MainNavigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 20,
//   },
//   textWrapper: {
//     height: height(100), // 70% of height device screen
//     width: width(100), // 80% of width device screen
//     backgroundColor: 'yellow',
//   },
//   myText: {
//     fontSize: totalSize(2) // 2% of total screen size
//   }
// });
