import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, TermsScreen } from '../screens';
import { AppRoute } from './AppRoutes';

const Stack = createStackNavigator();

export function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
      name={AppRoute.LOGIN_SCREEN}
      component={LoginScreen} 
      />
      <Stack.Screen 
      name={AppRoute.TERMS_SCREEN}
      component={TermsScreen} />
    </Stack.Navigator>
  );
}