import {View, Text, Modal, ActivityIndicator} from 'react-native';
import React from 'react';
import {globalStyles} from '../styles/globalStyles';
import {TextComponent} from '../components';
import {appColors} from '../constants/appColor';

interface Props {
  visible: boolean;
  mess?: string;
}
const LoadingModal = (props: Props) => {
  const {visible, mess} = props;
  return (
    <Modal style={{flex: 1}} transparent statusBarTranslucent visible={visible}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.5)',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator
          color={appColors.white}
          size={40}></ActivityIndicator>
        <TextComponent
          text="Loading"
          size={18}
          flex={0}
          color={appColors.white}></TextComponent>
      </View>
    </Modal>
  );
};

export default LoadingModal;
