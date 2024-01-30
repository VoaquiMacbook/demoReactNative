import * as React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Bai1_lab6 from './Bai1_lab6_PageChinh';
import Bai1_3_lab6_PagechiTiet from './Bai1_3_lab6_PagechiTiet';
// lab 5
import Bai1_lab5 from '../lab5/Bai1_lab5';
import Bai2_lab5 from '../lab5/Bai2_lab5';
import Bai4_lab5 from '../lab5/Bai4_lab5';
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

const Bai2_lab6_drawerNavigation = () => {
    return (
       
          <Drawer.Navigator initialRouteName="Màng hình chính">
            <Drawer.Screen name="Màng hình chính" component={Bai1_lab6} />
            <Drawer.Screen name="màng hình chi tiết" component={Bai1_3_lab6_PagechiTiet} />
            <Drawer.Screen name="màng hình Bai 1 lab5" component={Bai1_lab5} />
            <Drawer.Screen name="màng hình Bai 2 lab5" component={Bai2_lab5} />
            <Drawer.Screen name="màng hình Bai 3 lab5" component={Bai4_lab5} />
          </Drawer.Navigator>
       
      );
}

export default Bai2_lab6_drawerNavigation

