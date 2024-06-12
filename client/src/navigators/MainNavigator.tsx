import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import DrawerNavigator from './DrawerNavigator';
import {useDispatch, useSelector} from 'react-redux';
import {addAuth, authSelector} from '../redux/reducers/authReducer';
import authenticationAPI from '../apis/authApi';

const MainNavigator = () => {
  const Stack = createNativeStackNavigator();
  // const user = useSelector(authSelector);
  // const dispatch = useDispatch();
  // const getDataUser = async () => {
  //   const res = await authenticationAPI.HandleAuthentication(
  //     '/getDataUser',
  //     user.email,
  //     'get',
  //   );
  //   dispatch(addAuth(res.data));
  // };
  // useEffect(() => {
  //   getDataUser();
  // }, []);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Main" component={DrawerNavigator} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
