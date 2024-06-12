import {View, Text, FlatList} from 'react-native';
import React, {ReactNode} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RowComponent, SpaceComponent, TextComponent} from '.';
import {globalStyles} from '../styles/globalStyles';
import {appColors} from '../constants/appColors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {ChefFork} from '../assets/svgs';
import TagComponent from './TagComponent';

interface Props {
  isColor?: boolean;
}

interface Category {
  key: string;
  title: string;
  icon: ReactNode;
  iconColor: string;
}

const CategoriesList = (props: Props) => {
  const {isColor} = props;

  const categories: Category[] = [
    {
      // key: 'sports'
      key: '1',
      icon: (
        <Ionicons
          name="basketball"
          size={22}
          color={isColor ? appColors.white : '#EE544A'}
        />
      ),
      iconColor: '#EE544A',
      title: 'Sports',
    },
    {
      // key: 'musics'
      key: '2',
      icon: (
        <FontAwesome
          name="music"
          size={22}
          color={isColor ? appColors.white : '#F59762'}
        />
      ),
      iconColor: '#F59762',
      title: 'Music',
    },
    {
      // key: 'foods'
      key: '3',
      icon: <ChefFork color={isColor ? appColors.white : '#29D697'} />,
      iconColor: '#29D697',
      title: 'Food',
    },
    {
      // key: 'Art'
      key: '4',
      icon: (
        <Ionicons
          name="color-palette-sharp"
          size={22}
          color={isColor ? appColors.white : '#46CDFB'}
        />
      ),
      iconColor: '#46CDFB',
      title: 'Art',
    },
  ];

  const renderTagCategory = (item: Category) => {
    return (
      // change to tag component instead of text component
      <RowComponent
        onPress={() => {}}
        styles={[
          globalStyles.tag,
          {
            backgroundColor: isColor ? item.iconColor : appColors.white,
          },
        ]}>
        {item.icon}
        <SpaceComponent width={8} />
        <TextComponent
          text={item.title}
          color={isColor ? appColors.white : appColors.gray}
        />
      </RowComponent>
    );
  };

  return (
    <FlatList
      style={{paddingHorizontal: 16}}
      showsHorizontalScrollIndicator={false}
      horizontal
      data={categories}
      renderItem={({item}) => renderTagCategory(item)}
    />

    // <FlatList
    //   horizontal
    //   showsHorizontalScrollIndicator={false}
    //   data={categories}
    //   renderItem={({item}) => (
    //     <TagComponent
    //       bgColor={isColor ? item.iconColor : appColors.white}
    //       icon={item.icon}
    //       title={item.title}
    //       onPress={() => {}}
    //     />
    //   )}
    // />
  );
};

export default CategoriesList;