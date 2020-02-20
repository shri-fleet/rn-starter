import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Profile from '../screens/Profile';
import Extra from '../screens/Extra';

const SignedIn = createBottomTabNavigator(
  {
    Profile: {
      screen: Profile,
    },
    Extra: {
      screen: Extra,
    },
  },
  {
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: '#e58f19',
      activeBackgroundColor: '#a9c3d2',
      inactiveTintColor: '#666',
      labelStyle: {
        fontSize: 22,
        padding: 12,
      },
    },
  },
);

export default createAppContainer(SignedIn);
