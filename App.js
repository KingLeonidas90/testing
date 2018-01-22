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
import TestScreen from './screens/TestScreen';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

export default class App extends React.Component {
  render() {
    const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

const MainNavigator = StackNavigator({

myTab: {
  screen: TabNavigator({
    welcome: { screen: WelcomeScreen },
    auth: { screen: AuthScreen },
    test: { screen: TestScreen },
    main: {
      screen: TabNavigator({
        overview: {
          screen: StackNavigator({
          overView: { screen: OverviewScreen },
            createGroup: { screen: CreateGroupScreen },
          },
          {
     headerMode: 'none'
  })

        },
        attendees: { screen: AttendeesScreen },

        notification: {
          screen: StackNavigator({
            notification: { screen: NotificationsScreen },
            createNotification: { screen: CreateNotificationScreen }
          },
          {
     headerMode: 'none'
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
  }),

},


},
);


// welcome: { screen: WelcomeScreen },
// auth: { screen: AuthScreen },
// test: { screen: TestScreen },
// main: {
//   screen: TabNavigator({
//     overview: {
//       screen: StackNavigator({
//       overView: { screen: OverviewScreen },
//         createGroup: { screen: CreateGroupScreen },
//       })
//
//     },
//     attendees: { screen: AttendeesScreen },
//
//     notification: {
//       screen: StackNavigator({
//         notification: { screen: NotificationsScreen },
//         createNotification: { screen: CreateNotificationScreen }
//       })
//     }
//
// }, {
//   tabBarOptions: {
//     showLabel: false,
//     labelStyle: { fontSize: 12 },
//     showIcon: true,
//     iconStyle: { width: 30 },
//     style: {
//       backgroundColor: '#ff5055',
//       // marginTop: 24
//     }
//
//   }
// })
// }
// }, {
// // navigationOptions: {
// //   tabBarVisible: false
// // },
// // durch false kann man nicht mehr durchs swipen durch die jeweiligen Tabs switchen
// swipeEnabled: false,
// // Each screen will not mount/load until user clicks on them
// lazy: true,
// // Muss auf false bleiben für die android version, da die bar ansonsten nicht mehr
// // richtig funktioniert
// animationEnabled: false,
// tabBarPosition: 'bottom',
// });

    return (
      <View style={styles.container}>
          <MyStatusBar backgroundColor="red" barStyle="light-content" />
          <MainNavigator />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  }
});
