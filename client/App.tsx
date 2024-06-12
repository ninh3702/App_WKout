import {View, Text, StatusBar} from 'react-native';
import React, {useEffect, useState} from 'react';
import {LoginScreen, SplashScreen} from './src/screens';
import AuthNavigator from './src/navigators/AuthNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import MainNavigator from './src/navigators/MainNavigator';
import AppRouters from './src/navigators/AppRouters';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={'transparent'}
          translucent
        />
        <NavigationContainer>
          <AppRouters />
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;