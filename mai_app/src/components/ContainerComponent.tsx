import {View, Text, ImageBackground, SafeAreaView} from 'react-native';
import React, {ReactNode} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {globalStyles} from '../styles/globalStyles';

interface Props {
  isImageBackground?: boolean;
  isScroll?: boolean;
  title?: string;
  children: ReactNode;
}

const ContainerComponent = (props: Props) => {
  const {isImageBackground, isScroll, title, children} = props;
  const returnContainer = isScroll ? (
    <ScrollView style={{flex: 1}}>{children}</ScrollView>
  ) : (
    <View style={{flex: 1}}>{children}</View>
  );
  return isImageBackground ? (
    <ImageBackground
      source={require('../assets/images/background.png')}
      style={{flex: 1}}
      imageStyle={{flex: 1}}>
      {returnContainer}
    </ImageBackground>
  ) : (
    <SafeAreaView style={[globalStyles.container]}>
      <Text>{returnContainer}</Text>
    </SafeAreaView>
  );
};

export default ContainerComponent;