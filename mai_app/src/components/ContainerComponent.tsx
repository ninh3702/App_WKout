import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {ReactNode} from 'react';
import {globalStyles} from '../styles/globalStyles';
import {useNavigation} from '@react-navigation/native';
import RowComponent from './RowComponent';
import ButtonComponent from './ButtonComponent';
import {ArrowLeft} from 'iconsax-react-native';
import {appColors} from '../constants/appColor';
import TextComponent from './TextComponent';
import {fontFamilies} from '../constants/fontFamilies';

interface Props {
  isImageBackground?: boolean;
  isScroll?: boolean;
  title?: string;
  children: ReactNode;
  back?: boolean;
}

const ContainerComponent = (props: Props) => {
  const {isImageBackground, isScroll, title, children, back} = props;
  const navigation: any = useNavigation();
  const headerComponent = () => {
    return (
      <View style={{flex: 1, paddingTop: 30}}>
        <RowComponent
          styles={{
            paddingHorizontal: 16,
            paddingVertical: 18,
            minWidth: 48,
            minHeight: 48,
          }}>
          {back && (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{marginRight: 5}}>
              <ArrowLeft size={30} color={appColors.text} />
            </TouchableOpacity>
          )}
          {title ? (
            <TextComponent
              text={title}
              size={20}
              font={fontFamilies.medium}
              flex={1}
            />
          ) : (
            <></>
          )}
        </RowComponent>
        {returnContainer}
      </View>
    );
  };
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
      {headerComponent()}
    </ImageBackground>
  ) : (
    <SafeAreaView style={[globalStyles.container]}>
      <Text>{headerComponent()}</Text>
    </SafeAreaView>
  );
};

export default ContainerComponent;
