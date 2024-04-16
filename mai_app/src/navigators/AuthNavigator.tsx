import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '../screens';
import AskingScreen from '../screens/auth/AskingScreen';

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="AskingScreen" component={AskingScreen}></Stack.Screen>
      <Stack.Screen name="LoginScreen" component={LoginScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default AuthNavigator;
