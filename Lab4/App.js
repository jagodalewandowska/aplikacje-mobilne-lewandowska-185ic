import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import Switcher from './components/Switch';
import Select from './components/Select';
import DatePick from './components/DatePicker';
import ToastAndroid from './components/ToastAndroid';
import TextIn from './components/TextIn';

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
          title: 'Text Input',
          headerStyle: {
            backgroundColor: '#69BABA',
          },
          headerTintColor: '#1F1F1F',
          headerTitleStyle: {
            fontSize: 20,
            color: 'white',
          }
        }} 
          name='TextInput' 
          component={TextIn} />
        <Stack.Screen options={{
          title: 'Select',
          headerStyle: {
            backgroundColor: '#69BABA',
          },
          headerTintColor: '#1F1F1F',
          headerTitleStyle: {
            fontSize: 20,
            color: 'white',
          }
        }}  
          name='Select' 
          component={Select} />
        <Stack.Screen  options={{
          title: 'Switch',
          headerStyle: {
            backgroundColor: '#69BABA',
          },
          headerTintColor: '#1F1F1F',
          headerTitleStyle: {
            fontSize: 20,
            color: 'white',
          }
        }} 
          name='Switch' 
          component={Switcher} />
        <Stack.Screen  options={{
          title: 'Date Picker',
          headerStyle: {
            backgroundColor: '#69BABA',
          },
          headerTintColor: '#1F1F1F',
          headerTitleStyle: {
            fontSize: 20,
            color: 'white',
          }
        }} 
          name='DatePicker' 
          component={DatePick} />
        <Stack.Screen  options={{
          title: 'ToastAndroid',
          headerStyle: {
            backgroundColor: '#69BABA',
          },
          headerTintColor: '#1F1F1F',
          headerTitleStyle: {
            fontSize: 20,
            color: 'white',
          }
        }} 
          name='ToastAndroid' 
          component={ToastAndroid} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}