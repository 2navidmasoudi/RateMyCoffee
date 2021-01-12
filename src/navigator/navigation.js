import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens';

const Stack = createStackNavigator();

export default function navigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}