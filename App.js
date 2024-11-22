import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './home';
import Edit from './edit';
import Add from './add';

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Edit" component={Edit} />
          <Stack.Screen name="Add" component={Add} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
