import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  AvatarGroup,
  ButtonComponent,
  CardComponent,
  ContainerComponent,
  RowComponent,
  SectionComponent,
  SpaceComponent,
  TagBarComponent,
  TextComponent,
} from '../../components';
import {appInfo} from '../../constants/appInfos';
import {
  ArrowLeft,
  ArrowLeft2,
  ArrowRight,
  Calendar,
  Location,
} from 'iconsax-react-native';
import {appColors} from '../../constants/appColors';
import {globalStyles} from '../../styles/globalStyles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import {fontFamilies} from '../../constants/fontFamilies';
import {EventModel} from '../../models/EventModel';

const EventDetail = ({navigation, route}: any) => {
  const {item}: {item: EventModel} = route.params;
  const photoUrl =
    'https://gamek.mediacdn.vn/133514250583805952/2022/5/18/photo-1-16528608926331302726659.jpg';
  return (
    <View style={{flex: 1, backgroundColor: appColors.white}}>
      <ImageBackground
        source={require('../../assets/images/image1.png')}
        style={{flex: 1, height: 244}}
        imageStyle={{
          resizeMode: 'cover',
        }}>
        <LinearGradient colors={['rgba(0,0,0,0.6)', 'rgba(0,0,0,0.0)']}>
          <RowComponent
            styles={{paddingLeft: 16, paddingTop: 42, paddingRight: 16}}>
            <RowComponent styles={{flex: 1}}>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{width: 48, height: 48, justifyContent: 'center'}}>
                <ArrowLeft size={28} color={appColors.white} />
              </TouchableOpacity>
              <SpaceComponent height={10} />
              <TextComponent
                text="Event Detail"
                title
                color={appColors.white}
                flex={1}
              />
            </RowComponent>
            <CardComponent
              styles={[
                globalStyles.noSpaceCard,
                {width: 36, height: 36, justifyContent: 'center'},
              ]}
              color="#ffffff4D">
              <MaterialIcons
                name="bookmark"
                color={appColors.danger2}
                size={22}
              />
            </CardComponent>
          </RowComponent>
        </LinearGradient>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            flex: 1,
            paddingTop: 244 - 130,
          }}>
          <SectionComponent>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <RowComponent
                justify="space-between"
                styles={[
                  globalStyles.shadow,
                  {
                    backgroundColor: appColors.white,
                    borderRadius: 100,
                    paddingHorizontal: 12,
                    width: '90%',
                  },
                ]}>
                <AvatarGroup size={36}></AvatarGroup>
                <TouchableOpacity
                  style={[
                    globalStyles.button,
                    {backgroundColor: appColors.primary, paddingVertical: 8},
                  ]}>
                  <TextComponent text="Invite" color={appColors.white} />
                </TouchableOpacity>
              </RowComponent>
            </View>
          </SectionComponent>
          <View style={{backgroundColor: appColors.white}}>
            <SectionComponent>
              <TextComponent
                text={item.title}
                title
                size={34}
                font={fontFamilies.medium}
              />
            </SectionComponent>
            <SectionComponent>
              <RowComponent styles={{marginBottom: 20}}>
                <CardComponent
                  styles={[
                    globalStyles.noSpaceCard,

                    {width: 48, height: 48, justifyContent: 'center'},
                  ]}
                  color={`${appColors.primary}4D`}>
                  <Calendar
                    variant="Bold"
                    color={appColors.primary}
                    size={24}
                  />
                </CardComponent>
                <SpaceComponent width={16} />
                <View
                  style={{flex: 1, justifyContent: 'space-around', height: 48}}>
                  <TextComponent
                    text={`${item.date}`}
                    size={16}
                    font={fontFamilies.medium}
                  />
                  <TextComponent
                    text={`${item.startAt}`}
                    color={appColors.gray}
                  />
                </View>
              </RowComponent>

              <RowComponent styles={{marginBottom: 20}}>
                <CardComponent
                  styles={[
                    globalStyles.noSpaceCard,

                    {width: 48, height: 48, justifyContent: 'center'},
                  ]}
                  color={`${appColors.primary}4D`}>
                  <Location
                    variant="Bold"
                    color={appColors.primary}
                    size={24}
                  />
                </CardComponent>
                <SpaceComponent width={16} />
                <View
                  style={{flex: 1, justifyContent: 'space-around', height: 48}}>
                  <TextComponent
                    text={`${item.location.title}`}
                    size={16}
                    font={fontFamilies.medium}
                  />
                  <TextComponent
                    text={`${item.location.address}`}
                    color={appColors.gray}
                  />
                </View>
              </RowComponent>

              <RowComponent styles={{marginBottom: 20}}>
                <CardComponent
                  styles={[
                    globalStyles.noSpaceCard,

                    {width: 48, height: 48, justifyContent: 'center'},
                  ]}
                  color={`${appColors.primary}4D`}>
                  <Image
                    source={{uri: photoUrl}}
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      resizeMode: 'cover',
                    }}
                  />
                </CardComponent>
                <SpaceComponent width={16} />
                <View
                  style={{flex: 1, justifyContent: 'space-around', height: 48}}>
                  <TextComponent
                    text={`${item.authorId}`}
                    size={16}
                    font={fontFamilies.medium}
                  />
                  <TextComponent text="organization" color={appColors.gray} />
                </View>
              </RowComponent>
            </SectionComponent>
            <TagBarComponent title={`${item.title}`}></TagBarComponent>
            <SectionComponent>
              <TextComponent text={item.description} />
            </SectionComponent>
          </View>
        </ScrollView>
      </ImageBackground>
      <LinearGradient
        colors={['rgba(255,255,255,0.9)', 'rgba(255,255,255,1)']}
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
          padding: 12,
        }}>
        <ButtonComponent
          text="But"
          type="primary"
          onPress={() => {}}
          iconFlex="right"
          icon={
            <View
              style={[
                globalStyles.iconContainer,
                {
                  backgroundColor: '#3D56F0',
                },
              ]}>
              <ArrowRight size={18} color={appColors.white} />
            </View>
          }
        />
      </LinearGradient>
    </View>
  );
};

export default EventDetail;
