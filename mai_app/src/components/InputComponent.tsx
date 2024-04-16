import {View, Text} from 'react-native';
import React, {ReactNode} from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { EyeSlash } from 'iconsax-react-native';
import { appColors } from '../constants/appColor';

interface Props {
  value: string;
  onChange: (val: string) => void;
  affix?: ReactNode;
  placeholder?: string;
  suffix?: ReactNode;
  isPassword?: boolean;
  allowClear? : boolean
}
const InputComponent = (props: Props) => {
  const {value, onChange, affix, placeholder, suffix, isPassword, allowClear} = props;
  return (
    <View style={[]}>
      {affix && affix}

      {suffix ?? suffix}
      <TouchableOpacity
      {isPassword? <EyeSlash size={22} color={appColors.gray}></EyeSlash>} : <AntDesign></AntDesign>
      </TouchableOpacity>
    </View>
  );
};

export default InputComponent;
