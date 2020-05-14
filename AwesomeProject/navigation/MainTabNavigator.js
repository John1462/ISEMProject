import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';

import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

import ProductsScreen from '../screens/ProductsScreen';
import OrderScreen from '../screens/OrderScreen';
import RecordScreen from '../screens/RecordScreen';
import ProfileScreen from '../screens/ProfileScreen';

const LoginStack = createStackNavigator(
  {
    Login: {screen: LoginScreen},
    Register: {screen: RegisterScreen},
  }
);

const HomeStack = createBottomTabNavigator(
  {
  Products: {screen: ProductsScreen},
  Order: {screen: OrderScreen},
  Record: {screen: RecordScreen},
  Profile: {screen: ProfileScreen}
  },
  {
    headerMode: 'none',
  }
);


export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    Auth: LoginStack,
    App: HomeStack,
  },
  {
    initialRouteName: 'App',
    headerMode: 'none',
  }
);







