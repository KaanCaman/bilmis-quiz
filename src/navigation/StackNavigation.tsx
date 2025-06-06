// Stack navigation

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStaticNavigation} from '@react-navigation/native';
import Home from '../screens/Home';
import Quiz from '../screens/Quiz';
import Result from '../screens/Result';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screens: {
    // Home screen
    Home: {
      screen: Home,
      options: {
        headerShown: false,
      },
    },
    //

    // Quiz screen
    Quiz: {
      screen: Quiz,
      options: {
        headerShown: false,
        headerLeft: undefined,
        gestureEnabled: false,
      },
    },
    //

    // Result Screen
    Result: {
      screen: Result,
      options: {
        headerShown: false,
        headerLeft: undefined,
        gestureEnabled: false,
      },
    },
    //
  },
});

const Navigation = createStaticNavigation(RootStack);

export default Navigation;
