import {ArrowRight2} from 'iconsax-react-native';
import React from 'react';
import {RowComponent, TextComponent} from '.';
import {appColors} from '../constants/appColors';
import {TouchableOpacity} from 'react-native';

interface Props {
  title: string;
  onPress?: () => void;
}

const TagBarComponent = (props: Props) => {
  const {title, onPress} = props;

  return (
    <RowComponent
      onPress={onPress}
      styles={{marginBottom: 20, paddingHorizontal: 16}}>
      <TextComponent numberOfLine={1} size={18} title text={title} flex={1} />
      {onPress && (
        <RowComponent onPress={() => {}}>
          <TextComponent text="See All " color={appColors.gray} />
          <ArrowRight2 variant="Bold" size={14} color={appColors.gray} />
        </RowComponent>
      )}

      {/* <TouchableOpacity >
        <TextComponent text="See All " color={appColors.gray} />
        <ArrowRight2 variant="Bold" size={14} color={appColors.gray} />
      </TouchableOpacity> */}
    </RowComponent>
  );
};

export default TagBarComponent;
