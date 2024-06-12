import {View, Text, Button, Image, Switch, Alert} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {globalStyles} from '../../styles/globalStyles';
import {
  ButtonComponent,
  ContainerComponent,
  InputComponent,
  RowComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from '../../components';
import {Lock, Sms} from 'iconsax-react-native';
import {appColors} from '../../constants/appColors';
import SocialLogin from './SocialLogin';
import authenticationAPI from '../../apis/authApi';
import {Validate} from '../../utils/validate';
import {useDispatch} from 'react-redux';
import {addAuth} from '../../redux/reducers/authReducer';

const LoginScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRemember, setIsRemember] = useState(true);
  const dispatch = useDispatch();
  const handleLogin = async () => {
    const emailValidation = Validate.email(email);

    if (emailValidation) {
      try {
        const res = await authenticationAPI.HandleAuthentication(
          '/login',
          {email, password},
          'post',
        );
        dispatch(addAuth(res.data));
        if (isRemember) {
          await AsyncStorage.setItem(
            'auth',
            isRemember ? JSON.stringify(res.data) : email,
          );
        } else {
        }
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    } else {
      Alert.alert('Email is not correct');
    }
  };

  return (
    <ContainerComponent isImageBackground isScroll>
      <SectionComponent
        styles={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={{width: 162, height: 114, marginBottom: 30}}></Image>
      </SectionComponent>
      <SectionComponent>
        <TextComponent text="Sign in" title size={24} />
        <SpaceComponent height={21} />
        <InputComponent
          value={email}
          placeholder="Email"
          onChange={val => setEmail(val)}
          allowClear
          affix={<Sms size={22} color={appColors.gray} />}
        />
        <InputComponent
          isPassword
          value={password}
          placeholder="Password"
          onChange={val => setPassword(val)}
          allowClear
          affix={<Lock size={22} color={appColors.gray} />}
        />
        <RowComponent justify="space-between">
          <RowComponent onPress={() => setIsRemember(!isRemember)}>
            <Switch
              trackColor={{true: appColors.primary}}
              thumbColor={appColors.white}
              value={isRemember}
              onChange={() => setIsRemember(!isRemember)}
            />
            <SpaceComponent width={4} />
            <TextComponent text="Remember me" />
          </RowComponent>
          <ButtonComponent
            text="Forgot Password?"
            onPress={() => navigation.navigate('ForgotPassword')}
            type="text"
          />
        </RowComponent>
      </SectionComponent>
      <SpaceComponent height={16} />
      <SectionComponent>
        <ButtonComponent
          text="SIGN IN"
          type="primary"
          onPress={handleLogin}></ButtonComponent>
      </SectionComponent>
      <SectionComponent>
        <RowComponent justify="center">
          <TextComponent text="Don't have account ?"></TextComponent>
          <ButtonComponent
            type="link"
            text="Sign up"
            onPress={() => navigation.navigate('SignUpScreen')}
          />
        </RowComponent>
      </SectionComponent>
      <SocialLogin />
    </ContainerComponent>
  );
};

export default LoginScreen;