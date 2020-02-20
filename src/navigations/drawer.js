import React from 'react';
import {createDrawerNavigation} from 'react-navigation';

import Home from '../screens/Home';
import Info from '../screens/Info';
import Logout from '../screens/LogOut';
import DrawerContent from '../screens/Sidebar';

export default Drawer = createDrawerNavigation(
  {
    Home: {
      screen: Home,
    },
    Info: {
      screen: Info,
    },
    Logout: {
      screen: Logout,
    },
  },
  {
    contentComponent: DrawerContent,
    drawerWidth: 250,
    drawerPosition: 'left',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
  },
);
