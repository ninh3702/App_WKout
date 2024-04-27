import {View, Text, Button, Image, Switch} from 'react-native';
import React, {useEffect, useState} from 'react';
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
import {Lock, Profile, ProfileAdd, Sms} from 'iconsax-react-native';
import {appColors} from '../../constants/appColor';
import SocialLogin from './SocialLogin';
import {SafeAreaView} from 'react-native-safe-area-context';
import {LoadingModal} from '../../modals';
import authenticationAPI from '../../apis/authApi';
import {Validate} from '../../utils/validate';

const initValue = {
  userName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpScreen = ({navigation}: any) => {
  const [values, setValues] = useState(initValue);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  useEffect(() => {
    if (values.email || values.password) {
      setErrorMessage('');
    }
  }, [values.email, values.password]);
  const handleChangeValue = (key: string, value: string) => {
    const data: any = {...values};
    data[`${key}`] = value;
    setValues(data);
  };

  const handleRegister = async () => {
    const {userName, email, password, confirmPassword} = values;
    const emailValidation = Validate.email(email);
    const passwordValidation = Validate.Password(password);
    if (userName && email && password && confirmPassword) {
      setIsLoading(true);
      if (emailValidation && passwordValidation) {
        try {
          const res = await authenticationAPI.HandleAuthentication(
            '/register',
            {
              username: values.userName,
              email: values.email,
              password: values.password,
            },
            'post',
          );
          console.log(res);
          setIsLoading(false);
        } catch (error) {
          console.log(error);
          setIsLoading(false);
        }
      } else {
        setErrorMessage('Email not correct');
      }
    } else {
      setErrorMessage('Vui long nhap day du thong');
    }
  };
  return (
    <>
      <ContainerComponent isImageBackground isScroll back>
        <SectionComponent>
          <TextComponent text="Sign in" title size={24} />
          <SpaceComponent height={21} />
          <InputComponent
            value={values.userName}
            placeholder="Full name"
            onChange={val => handleChangeValue('userName', val)}
            allowClear
            affix={<Profile size={22} color={appColors.gray} />}
          />
          <InputComponent
            value={values.email}
            placeholder="abc@gmail.com"
            onChange={val => handleChangeValue('email', val)}
            allowClear
            affix={<Sms size={22} color={appColors.gray} />}
          />
          <InputComponent
            isPassword
            value={values.password}
            placeholder="Your password"
            onChange={val => handleChangeValue('password', val)}
            allowClear
            affix={<Lock size={22} color={appColors.gray} />}
          />
          <InputComponent
            isPassword
            value={values.confirmPassword}
            placeholder="Confirm password"
            onChange={val => handleChangeValue('confirmPassword', val)}
            allowClear
            affix={<Lock size={22} color={appColors.gray} />}
          />
        </SectionComponent>
        <SpaceComponent height={16} />
        <SectionComponent>
          {errorMessage && (
            <TextComponent text={errorMessage} color={appColors.gray} />
          )}
        </SectionComponent>

        <SectionComponent>
          <ButtonComponent
            text="SIGN IN"
            type="primary"
            onPress={handleRegister}></ButtonComponent>
        </SectionComponent>
        <SectionComponent>
          <RowComponent justify="center">
            <TextComponent text="Already have an account ?"></TextComponent>
            <ButtonComponent
              type="link"
              text="Sign in"
              onPress={() => navigation.navigate('LoginScreen')}
            />
          </RowComponent>
        </SectionComponent>
        <SocialLogin />
      </ContainerComponent>
      <LoadingModal visible={isLoading} />
    </>
  );
};

export default SignUpScreen;
