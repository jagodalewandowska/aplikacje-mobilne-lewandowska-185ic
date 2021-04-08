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
        <Stack.Screen options={{
          title: 'Menu',
          headerStyle: {
            backgroundColor: '#41A7A7',
          },
          headerTintColor: '#1F1F1F',
          headerTitleStyle: {
            fontSize: 25,
            textAlign: 'center',
            color: 'white',
          }
        }} 
          name="Strona Główna" 
          component={Home} />        
        <Stack.Screen options={{
          title: 'Spread Operator',
          headerStyle: {
            backgroundColor: '#69BABA',
          },
          headerTintColor: '#1F1F1F',
          headerTitleStyle: {
            fontSize: 20,
            color: 'white',
          }
        }} 
          name='Spread Operator' 
          component={SpreadOperator} />
        <Stack.Screen options={{
          title: 'Rest Parameters',
          headerStyle: {
            backgroundColor: '#6EA3A4',
          },
          headerTintColor: '#F5FFFF',
          headerTitleStyle: {
            fontSize: 20,
            color: 'white',
          }
        }}  
          name='Rest Parameters' 
          component={RestParameters} />
        <Stack.Screen  options={{
          title: 'Use State',
          headerStyle: {
            backgroundColor: '#AEDEE0',
          },
          headerTintColor: '#1F1F1F',
          headerTitleStyle: {
            fontSize: 20,
            color: 'white',
          }
        }} 
          name='UseState' 
          component={UseState} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}