import React from 'react';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
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
    const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

const MainNavigator = TabNavigator({

welcome: { screen: WelcomeScreen },
auth: { screen: AuthScreen },
main: {
  screen: TabNavigator({
    overview: {
      screen: StackNavigator({
      overView: { screen: OverviewScreen },
        createGroup: { screen: CreateGroupScreen },
      })

    },
    attendees: { screen: AttendeesScreen },

    notification: {
      screen: StackNavigator({
        notification: { screen: NotificationsScreen },
        createNotification: { screen: CreateNotificationScreen }
      })
    }

}, {
  tabBarOptions: {
    showLabel: false,
    labelStyle: { fontSize: 12 },
    showIcon: true,
    iconStyle: { width: 30 },
    style: {
      backgroundColor: '#ff5055',
      // marginTop: 24
    }

  }
})
}
}, {
// navigationOptions: {
//   tabBarVisible: false
// },
// durch false kann man nicht mehr durchs swipen durch die jeweiligen Tabs switchen
swipeEnabled: false,
// Each screen will not mount/load until user clicks on them
lazy: true,
// Muss auf false bleiben für die android version, da die bar ansonsten nicht mehr
// richtig funktioniert
animationEnabled: false,
tabBarPosition: 'bottom',
});

    return (
      <View style={styles.container}>
          <MyStatusBar backgroundColor="red" barStyle="light-content" />
          <MainNavigator />
        </View>
    );
  }
}

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  }
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
