import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {globalStyles} from '../../styles/globalStyles';
import {InputComponent} from '../../components';
import {Lock, Sms} from 'iconsax-react-native';
import {appColors} from '../../constants/appColor';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View
      style={[
        globalStyles.container,
        {
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        },
      ]}>
      <InputComponent
        value={email}
        placeholder="Email"
        onChange={val => setEmail(val)}
        allowClear
        affix={<Sms size={22} color={appColors.gray} />}
      />
      <InputComponent
        value={password}
        placeholder="Password"
        onChange={val => setPassword(val)}
        allowClear
        affix={<Lock size={22} color={appColors.gray} />}
      />
    </View>
  );
};

export default LoginScreen;
