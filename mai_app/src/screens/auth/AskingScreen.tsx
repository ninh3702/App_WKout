import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {globalStyles} from '../../styles/globalStyles';
import Swiper from 'react-native-swiper';
import {appInfo} from '../../constants/appInfos';
import {appColors} from '../../constants/appColor';
import TextComponent from '../../components/TextComponent';
import {fontFamilies} from '../../constants/fontFamilies';

const AskingScreen = ({navigation}: any) => {
  const [index, setIndex] = useState(0);
  return (
    <View style={[globalStyles.container]}>
      <Swiper
        style={[]}
        loop={false}
        activeDotColor={appColors.white}
        onIndexChanged={num => setIndex(num)}
        index={index}>
        <Image
          source={require('../../assets/images/Onboarding1.png')}
          style={{
            flex: 1,
            width: appInfo.sizes.WIDTH,
            height: appInfo.sizes.HEIGHT,
            resizeMode: 'cover',
          }}></Image>
        <Image
          source={require('../../assets/images/Onboarding2.png')}
          style={{
            flex: 1,
            width: appInfo.sizes.WIDTH,
            height: appInfo.sizes.HEIGHT,
            resizeMode: 'cover',
          }}></Image>
        <Image
          source={require('../../assets/images/Onboarding3.png')}
          style={{
            flex: 1,
            width: appInfo.sizes.WIDTH,
            height: appInfo.sizes.HEIGHT,
            resizeMode: 'cover',
          }}></Image>
      </Swiper>
      <View
        style={{
          paddingHorizontal: 35,
          paddingVertical: 25,
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <TextComponent
            text="Skip"
            color={appColors.gray}
            font={fontFamilies.medium}></TextComponent>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            index < 2 ? setIndex(index + 1) : navigation.navigate('LoginScreen')
          }>
          <TextComponent
            text="Next"
            color={appColors.gray2}
            font={fontFamilies.medium}></TextComponent>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AskingScreen;

const styles = StyleSheet.create({
  text: {
    color: appColors.white,
    fontSize: 17,
    fontWeight: '500',
  },
});
