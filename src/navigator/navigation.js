import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import * as Screens from '../screens';

const Stack = createStackNavigator();

export default function navigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Screens.HomeScreen}
        options={{title: "Navid's Coffee"}}
      />
      <Stack.Screen
        name="Salar"
        component={Screens.SalarScreen}
        options={{title: "Salar's Zarafeh"}}
      />
    </Stack.Navigator>
  );
}
