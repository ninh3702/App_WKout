import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {
  ButtonComponent,
  ContainerComponent,
  InputComponent,
  SectionComponent,
  TextComponent,
} from '../../components';
import {ArrowRight, Sms} from 'iconsax-react-native';
import {appColors} from '../../constants/appColor';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  return (
    <ContainerComponent back isImageBackground>
      <SectionComponent>
        <TextComponent text="Reset Password" title></TextComponent>
      </SectionComponent>
      <SectionComponent>
        <TextComponent text="Please enter your email address to request a password reset"></TextComponent>
      </SectionComponent>
      <SectionComponent>
        <InputComponent
          value={email}
          placeholder="abc@gmail.com"
          onChange={val => setEmail(val)}
          allowClear
          affix={<Sms size={22} color={appColors.gray} />}
        />
      </SectionComponent>

      <SectionComponent>
        <ButtonComponent
          text="SEND"
          type="primary"
          iconFlex="right"
          icon={
            <ArrowRight size={22} color={appColors.white} />
          }></ButtonComponent>
      </SectionComponent>
    </ContainerComponent>
  );
};

export default ForgotPassword;
