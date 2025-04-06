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
    },
    //

    // Result Screen
    Result: {
      screen: Result,
    },
    //
  },
});

const Navigation = createStaticNavigation(RootStack);

export default Navigation;
