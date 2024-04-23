import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ForgotPassword, LoginScreen, Verification} from '../screens';
import AskingScreen from '../screens/auth/AskingScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="AskingScreen" component={AskingScreen}></Stack.Screen>
      <Stack.Screen name="LoginScreen" component={LoginScreen}></Stack.Screen>
      <Stack.Screen name="SignUpScreen" component={SignUpScreen}></Stack.Screen>
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}></Stack.Screen>
      <Stack.Screen name="Verification" component={Verification}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default AuthNavigator;
