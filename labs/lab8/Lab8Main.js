import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
const Stack = createNativeStackNavigator();

import Lab8List from './Lab8List';
import Lab8Create from './Lab8Create';
import Lab8Update from './Lab8Update';
import Lab8Detail from './Lab8Detail';

const Lab8Main = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: true }}>
                <Stack.Screen name="Lab8List" component={Lab8List} />
                <Stack.Screen name="Lab8Create" component={Lab8Create} />
                <Stack.Screen name="Lab8Update" component={Lab8Update} />
                <Stack.Screen name="Lab8Detail" component={Lab8Detail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Lab8Main

const styles = StyleSheet.create({})