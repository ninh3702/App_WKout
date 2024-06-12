import {View, Text, TouchableOpacity, StyleProp, ViewStyle} from 'react-native';
import React, {ReactNode} from 'react';
import {RowComponent, TextComponent} from '.';
import {globalStyles} from '../styles/globalStyles';
import {appColors} from '../constants/appColors';

interface Props {
  icon?: ReactNode;
  title: string;
  isFill?: boolean;
  color?: string;
  onPress?: () => void;
  label?: string;
  textColor?: string;
  bgColor?: string;
  styles?: StyleProp<ViewStyle>;
}

const TagComponent = (props: Props) => {
  const {icon, color, isFill, title, onPress, textColor, bgColor, styles} =
    props;

  return (
    // <RowComponent>{icon && icon}</RowComponent>
    <TouchableOpacity
      onPress={onPress}
      style={[
        globalStyles.row,
        globalStyles.tag,
        {backgroundColor: bgColor ? bgColor : appColors.white},
        styles,
      ]}>
      {icon && icon}
      <TextComponent
        text={title}
        styles={{marginLeft: icon ? 8 : 0}}
        color={
          textColor ? textColor : bgColor ? appColors.white : appColors.gray
        }
      />
    </TouchableOpacity>
  );
};

export default TagComponent;
