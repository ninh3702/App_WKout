import {View, Text, StyleProp, ViewStyle, TouchableOpacity} from 'react-native';
import React, {ReactNode} from 'react';
import TextComponent from './TextComponent';
import {appColors} from '../constants/appColors';
import {globalStyles} from '../styles/globalStyles';
import {fontFamilies} from '../constants/fontFamilies';

interface Props {
  icon?: ReactNode;
  text: string;
  type?: 'primary' | 'text' | 'link';
  color?: string;
  styles?: StyleProp<ViewStyle>;
  textColor?: string;
  textStyles?: StyleProp<ViewStyle>;
  textFont?: string;
  onPress?: () => void;
  iconFlex?: 'right' | 'left';
  disable?: boolean;
}

const ButtonComponent = (props: Props) => {
  const {
    icon,
    text,
    type,
    color,
    styles,
    textColor,
    textStyles,
    textFont,
    onPress,
    iconFlex,
    disable,
  } = props;
  return type === 'primary' ? (
    <View style={{alignItems: 'center'}}>
      <TouchableOpacity
        disabled={disable}
        onPress={onPress}
        style={[
          globalStyles.button,
          globalStyles.shadow,
          {
            backgroundColor: color
              ? color
              : disable
              ? appColors.gray
              : appColors.primary,
            marginBottom: 17,
            width: '90%',
          },
          styles,
        ]}>
        {icon && iconFlex === 'left' && icon}
        <TextComponent
          text={text}
          color={textColor ?? appColors.white}
          font={textFont ?? fontFamilies.medium}
          styles={[
            textStyles,
            {marginLeft: icon ? 12 : 0, fontSize: 16, textAlign: 'center'},
          ]}
          flex={icon && iconFlex === 'right' ? 1 : 0}></TextComponent>
        {icon && iconFlex === 'right' && icon}
      </TouchableOpacity>
    </View>
  ) : (
    <TouchableOpacity onPress={onPress}>
      <TextComponent
        text={text}
        color={
          type === 'link' ? appColors.primary : appColors.text
        }></TextComponent>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
