import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import First from './components/First';
import Second from './components/Second';
import Touchable from './components/Touchable';
import Swipeable from './components/Swipeable';

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
          title: 'Pierwszy ScrollView',
          headerStyle: {
            backgroundColor: '#69BABA',
          },
          headerTintColor: '#1F1F1F',
          headerTitleStyle: {
            fontSize: 20,
            color: 'white',
          }
        }} 
          name='First' 
          component={First} />
        <Stack.Screen options={{
          title: 'Drugi ScrollView',
          headerStyle: {
            backgroundColor: '#69BABA',
          },
          headerTintColor: '#1F1F1F',
          headerTitleStyle: {
            fontSize: 20,
            color: 'white',
          }
        }}  
          name='Second' 
          component={Second} />
        <Stack.Screen  options={{
          title: 'Touchable',
          headerStyle: {
            backgroundColor: '#69BABA',
          },
          headerTintColor: '#1F1F1F',
          headerTitleStyle: {
            fontSize: 20,
            color: 'white',
          }
        }} 
          name='Touchable' 
          component={Touchable} />
        <Stack.Screen  options={{
          title: 'Swipeable',
          headerStyle: {
            backgroundColor: '#69BABA',
          },
          headerTintColor: '#1F1F1F',
          headerTitleStyle: {
            fontSize: 20,
            color: 'white',
          }
        }} 
          name='Swipeable' 
          component={Swipeable} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}