import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
  const [email, setEmail] = useState('');

  return (
    <View>
      <Text style={{color: 'blue'}}>LoginScreen</Text>
      <Button
        title="Login"
        onPress={async () =>
          await AsyncStorage.setItem('assetToken', 'fafafafa')
        }></Button>
    </View>
  );
};

export default LoginScreen;
