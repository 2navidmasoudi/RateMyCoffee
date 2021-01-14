import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import * as Screens from '../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBar from '../components/TabBar';

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="RateRoom"
        component={Screens.HomeScreen}
        options={{title: 'Rate'}}
      />
    </HomeStack.Navigator>
  );
}

const RateStack = createStackNavigator();

function RateStackScreen() {
  return (
    <RateStack.Navigator>
      <RateStack.Screen
        name="Rate"
        component={Screens.RateScreen}
        options={{title: 'Add Rating'}}
      />
    </RateStack.Navigator>
  );
}

const SalarStack = createStackNavigator();

function SalarStackScreen() {
  return (
    <SalarStack.Navigator>
      <SalarStack.Screen
        name="SalarRoom"
        component={Screens.SalarScreen}
        options={{title: "Salar's Zarafeh"}}
      />
    </SalarStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function navigation() {
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen name="Overal" component={HomeStackScreen} />
      <Tab.Screen name="Rate" component={RateStackScreen} />
      <Tab.Screen name="Salar" component={SalarStackScreen} />
    </Tab.Navigator>
  );
}
