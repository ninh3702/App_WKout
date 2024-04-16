import {View, Text, StyleProp, TextStyle} from 'react-native';
import React from 'react';
import {appColors} from '../constants/appColor';
import {globalStyles} from '../styles/globalStyles';
import { fontFamilies } from '../constants/fontFamilies';

interface Props {
  text: string;
  color?: string;
  size?: number;
  flex?: number;
  font?: string;
  styles?: StyleProp<TextStyle>;
}

const TextComponent = (props: Props) => {
  const {text, color, size, flex, font, styles} = props;
  return (
    <Text
      style={[
        globalStyles.text,
        {
          color: color ?? appColors.text,
          flex: flex ?? 0,
          fontSize: size ?? 14,
          fontFamily: font ?? fontFamilies.regular,
        },
        styles,
      ]}> {text}</Text>
  );
};

export default TextComponent;
