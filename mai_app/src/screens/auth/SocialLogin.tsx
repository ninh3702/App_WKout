import {View, Text} from 'react-native';
import React from 'react';
import {
  ButtonComponent,
  SectionComponent,
  TextComponent,
} from '../../components';
import {appColors} from '../../constants/appColor';
import {fontFamilies} from '../../constants/fontFamilies';
import {Facebook, Google} from '../../assets/svgs';

const SocialLogin = () => {
  return (
    <SectionComponent>
      <TextComponent
        text="OR"
        color={appColors.gray}
        font={fontFamilies.medium}
        size={16}
        styles={{textAlign: 'center'}}></TextComponent>
      <ButtonComponent
        type="primary"
        iconFlex="left"
        text="Login with Google"
        textColor={appColors.text}
        textFont={fontFamilies.regular}
        color={appColors.white}
        icon={<Google />}></ButtonComponent>
      <ButtonComponent
        type="primary"
        iconFlex="left"
        text="Login with Facebook"
        textColor={appColors.text}
        textFont={fontFamilies.regular}
        color={appColors.white}
        icon={<Facebook />}></ButtonComponent>
    </SectionComponent>
  );
};

export default SocialLogin;
