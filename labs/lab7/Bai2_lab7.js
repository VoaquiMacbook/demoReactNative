import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

function YeuthichScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>YÊU THÍCH</Text>
    </View>
  );
}

function PhobienScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>PHỔ BIẾN</Text>
    </View>
  );
}

function TructiepScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>TRỰC TIẾP</Text>
      </View>
    );
  }

const Tab = createMaterialTopTabNavigator();

export default function Bai2_lab7() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarStyle:{
            backgroundColor:'#FF6C22'
        },
        tabBarLabelStyle: {
            color: 'white',
            fontWeight:'bold'
          },
      }}
      >
        <Tab.Screen name="YÊU THÍCH" component={YeuthichScreen} />
        <Tab.Screen name="PHỔ BIẾN" component={PhobienScreen} />
        <Tab.Screen name="TRỰC TIẾP" component={TructiepScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
