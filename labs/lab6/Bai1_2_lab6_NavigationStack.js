import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// demo
import Bai1_lab5 from '../lab5/Bai1_lab5';
import Bai2_lab5 from '../lab5/Bai2_lab5';
import Bai4_lab5 from '../lab5/Bai4_lab5';

import Bai1_lab6 from './Bai1_lab6_PageChinh';
import Bai1_3_lab6_PagechiTiet from './Bai1_3_lab6_PagechiTiet';
import Bai2_lab6_drawerNavigation from './Bai2_lab6_drawerNavigation';

const Stack = createNativeStackNavigator();
const Bai1_2_lab6 = (props) => {

  const { navigation } = props;
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false, // hidden toobar
          // headerStyle:{
          //     backgroundColor:'#f4511e'
          // },
          // headerTintColor:'#fff',
          // headerTitleStyle:{
          //     fontWeight:'bold',
          // },

        }}
        initialRouteName='Bai1_lab6_PageChinh'>
        <Stack.Screen name="Bai2_lab6_drawerNavigation" component={Bai2_lab6_drawerNavigation} />
        <Stack.Screen name="Bai1_lab6_PageChinh" component={Bai1_lab6} />
        <Stack.Screen name="Bai1_lab6_PagechiTiet" component={Bai1_3_lab6_PagechiTiet} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Bai1_2_lab6

const styles = StyleSheet.create({})