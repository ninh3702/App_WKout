import { View, Text, Button } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const HomeScreen = () => {
  return (
    <View style={{justifyContent: 'center', alignItems:'center'}}>
      <Text>HomeScreen</Text>
      <Button title='Logout' onPress={async () => 
      await AsyncStorage.setItem('assetToken', '')
      }></Button>
    </View>
  )
}

export default HomeScreen