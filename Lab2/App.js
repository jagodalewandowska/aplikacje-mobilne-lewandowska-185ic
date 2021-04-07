import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import SpreadOperator from './components/SpreadOperator';
import RestParameters from './components/RestParameters';
import UseState from './components/UseState';

const Stack = createStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Spread Operator' component={SpreadOperator} />
        <Stack.Screen name='Rest Parameters' component={RestParameters} />
        <Stack.Screen name='UseState' component={UseState} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}