import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import First from './components/First';
import Second from './components/Second';
import Third from './components/Third';
import Lazy from './components/Lazy';
import Sort from './components/Sort';

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
          title: 'Sortowanie oraz filtrowanie',
          headerStyle: {
            backgroundColor: '#69BABA',
          },
          headerTintColor: '#1F1F1F',
          headerTitleStyle: {
            fontSize: 20,
            color: 'white',
          }
        }} 
          name='Sort' 
          component={Sort} />
        <Stack.Screen options={{
          title: 'Lazy loading',
          headerStyle: {
            backgroundColor: '#6EA3A4',
          },
          headerTintColor: '#F5FFFF',
          headerTitleStyle: {
            fontSize: 20,
            color: 'white',
          }
        }}  
          name='Lazy' 
          component={Lazy} />
        <Stack.Screen  options={{
          title: 'Step progress',
          headerStyle: {
            backgroundColor: '#AEDEE0',
          },
          headerTintColor: '#1F1F1F',
          headerTitleStyle: {
            fontSize: 20,
            color: 'white',
          }
        }} 
          name='First' 
          component={First} />
        <Stack.Screen  options={{
        title: 'Second Step',
        headerStyle: {
          backgroundColor: '#AEDEE0',
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
        title: 'Third Step',
        headerStyle: {
          backgroundColor: '#AEDEE0',
        },
        headerTintColor: '#1F1F1F',
        headerTitleStyle: {
          fontSize: 20,
          color: 'white',
        }
      }} 
        name='Third' 
        component={Third} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}