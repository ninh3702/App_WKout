import {View, Text, Dimensions, ImageBackground} from 'react-native';
import React from 'react';
import {
  AvatarGroup,
  CardComponent,
  RowComponent,
  SpaceComponent,
  TextComponent,
} from '.';
import {EventModel} from '../models/EventModel';
import {Bookmark2, Location} from 'iconsax-react-native';
import {appColors} from '../constants/appColors';
import {appInfo} from '../constants/appInfos';
import {fontFamilies} from '../constants/fontFamilies';
import {globalStyles} from '../styles/globalStyles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

interface Props {
  item: EventModel;
  type: 'list' | 'card';
  onPress?: () => void;
}

const EventItem = (props: Props) => {
  const {item, type, onPress} = props;
  const navigation: any = useNavigation();
  return (
    <CardComponent
      isShadow
      styles={{width: appInfo.sizes.WIDTH * 0.7}}
      onPress={() => navigation.navigate('EventDetail', {item})}>
      <ImageBackground
        style={{flex: 1, marginBottom: 12, height: 131, padding: 10}}
        source={require('../assets/images/image1.png')}
        imageStyle={{
          padding: 10,
          resizeMode: 'cover',
          borderRadius: 12,
        }}>
        <RowComponent justify="space-between">
          <CardComponent styles={globalStyles.noSpaceCard} color="#ffffffB3">
            <TextComponent
              color={appColors.danger2}
              font={fontFamilies.bold}
              text="10"
              size={18}
            />
            <TextComponent
              color={appColors.danger2}
              font={fontFamilies.semiBold}
              text="JUNE"
              size={10}
            />
          </CardComponent>
          <CardComponent styles={globalStyles.noSpaceCard} color="#ffffffB3">
            <MaterialIcons
              name="bookmark"
              color={appColors.danger2}
              size={22}
            />
          </CardComponent>
        </RowComponent>
      </ImageBackground>

      <TextComponent numberOfLine={1} text={item.title} title size={18} />
      <AvatarGroup />
      <RowComponent>
        <Location size={18} color={appColors.text3} variant="Bold" />
        <SpaceComponent width={8} />
        <TextComponent
          text={item.location.address}
          size={12}
          color={appColors.text2}
        />
      </RowComponent>
    </CardComponent>
  );

  // return type === 'card' ? (
  //   <CardComponent styles={}>
  //     <TextComponent
  //       numberOfLine={1}
  //       title
  //       size={18}
  //       text="International Band Music Concert"
  //     />
  //   </CardComponent>
  // ) : (
  //   <></>
  // );
};

export default EventItem;
