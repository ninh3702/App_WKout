import {View, Text, StyleProp, ViewStyle} from 'react-native';
import React, {ReactNode} from 'react';
import {globalStyles} from '../styles/globalStyles';

interface Props {
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined;
  styles?: StyleProp<ViewStyle>;
  children: ReactNode;
}

const RowComponent = (props: Props) => {
  const {justify, styles, children} = props;
  return (
    <View style={[globalStyles.row, styles, {justifyContent: justify}]}>
      {children}
    </View>
  );
};

export default RowComponent;
