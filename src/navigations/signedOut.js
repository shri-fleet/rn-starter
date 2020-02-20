import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SignIn from '../screens/SignIn';

const SignedOut = createStackNavigator({
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      title: 'Sign Up',
    },
  },
});

export default createAppContainer(SignedOut);
