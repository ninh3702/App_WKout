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
import {appColors} from '../../constants/appColors';
import SocialLogin from './components/SocialLogin';
import {SafeAreaView} from 'react-native-safe-area-context';
import {LoadingModal} from '../../modals';
import authenticationAPI from '../../apis/authApi';
import {Validate} from '../../utils/validate';
import {useDispatch} from 'react-redux';
import {addAuth} from '../../redux/reducers/authReducer';

interface ErrorMessages {
  email: string;
  password: string;
  confirmPassword: string;
}

const initValue = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpScreen = ({navigation}: any) => {
  const [values, setValues] = useState(initValue);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<any>();
  const [isDisable, setIsDisable] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    if (
      !errorMessage ||
      (errorMessage &&
        (errorMessage.email ||
          errorMessage.password ||
          errorMessage.confirmPassword)) ||
      !values.email ||
      !values.password ||
      !values.confirmPassword
    ) {
      setIsDisable(true);
    } else {
      setIsDisable(false);
    }
  }, [errorMessage]);
  const handleChangeValue = (key: string, value: string) => {
    const data: any = {...values};
    data[`${key}`] = value;
    setValues(data);
  };

  const formValidator = (key: string) => {
    const data = {...errorMessage};
    let message = '';
    switch (key) {
      case 'email':
        if (!values.email) {
          message = 'Email is required';
        } else if (!Validate.email(values.email)) {
          message = 'Email is not invalid';
        } else {
          message = '';
        }
        break;
      case 'password':
        message = !values.password ? 'Password is required' : '';
        break;
      case 'confirmPassword':
        if (!values.confirmPassword) {
          message = !values.password ? 'ConfirmPassword is required' : '';
        } else if (values.confirmPassword !== values.password) {
          message = 'Password is not match';
        } else {
          message = '';
        }
        break;
    }
    data[`${key}`] = message;
    setErrorMessage(data);
  };

  const handleRegister = async () => {
    const api = '/verification';
    setIsLoading(true);
    try {
      const res = await authenticationAPI.HandleAuthentication(
        api,
        values,
        'post',
      );
      console.log(res);
      setIsLoading(false);
      navigation.navigate('Verification', {
        code: res.data.code,
        ...values,
      });
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }

    // const {userName, email, password, confirmPassword} = values;
    // const emailValidation = Validate.email(email);
    // const passwordValidation = Validate.Password(password);
    // if (userName && email && password && confirmPassword) {
    //   setIsLoading(true);
    //   if (emailValidation && passwordValidation) {
    //     try {
    //       const res = await authenticationAPI.HandleAuthentication(
    //         '/register',
    //         {
    //           username: values.userName,
    //           email: values.email,
    //           password: values.password,
    //         },
    //         'post',
    //       );
    //       dispatch(addAuth(res.data));
    //       await AsyncStorage.setItem('auth', JSON.stringify(res.data));
    //       console.log(res.data);
    //       setIsLoading(false);
    //     } catch (error) {
    //       console.log(error);
    //       setIsLoading(false);
    //     }
    //   } else {
    //     setErrorMessage('Email not correct');
    //   }
    // } else {
    //   setErrorMessage('Vui long nhap day du thong');
    // }
  };
  return (
    <>
      <ContainerComponent isImageBackground isScroll back>
        <SectionComponent>
          <TextComponent text="Sign in" title size={24} />
          <SpaceComponent height={21} />
          <InputComponent
            value={values.name}
            placeholder="Full name"
            onChange={val => handleChangeValue('name', val)}
            allowClear
            affix={<Profile size={22} color={appColors.gray} />}
          />
          <InputComponent
            value={values.email}
            placeholder="abc@gmail.com"
            onChange={val => handleChangeValue('email', val)}
            allowClear
            affix={<Sms size={22} color={appColors.gray} />}
            onEnd={() => formValidator('email')}
          />
          <InputComponent
            isPassword
            value={values.password}
            placeholder="Your password"
            onChange={val => handleChangeValue('password', val)}
            allowClear
            affix={<Lock size={22} color={appColors.gray} />}
            onEnd={() => formValidator('password')}
          />
          <InputComponent
            isPassword
            value={values.confirmPassword}
            placeholder="Confirm password"
            onChange={val => handleChangeValue('confirmPassword', val)}
            allowClear
            affix={<Lock size={22} color={appColors.gray} />}
            onEnd={() => formValidator('confirmPassword')}
          />
        </SectionComponent>
        <SpaceComponent height={16} />

        {errorMessage && (
          <SectionComponent>
            {Object.keys(errorMessage).map(
              (error, index) =>
                errorMessage[`${error}`] && (
                  <TextComponent
                    key={`error${index}`}
                    text={errorMessage[`${error}`]}
                    color={appColors.gray}
                  />
                ),
            )}
          </SectionComponent>
        )}

        <SectionComponent>
          <ButtonComponent
            text="SIGN IN"
            type="primary"
            onPress={handleRegister}
            disable={isDisable}></ButtonComponent>
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
