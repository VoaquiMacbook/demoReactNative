import { View, Text } from 'react-native'
import React from 'react'
// tabs
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './tabs/Home'
import History from './tabs/History'
import Favorite from './tabs/Favorite'
import Cart from './tabs/Cart'
const Tab = createBottomTabNavigator();

const MainTabNavigation = () => {
    return (
        <Tab.Navigator 
        screenOptions={{ 
            headerStyle:{
               
            },
            tabBarStyle:{
                backgroundColor:'black',
                paddingBottom:8,
            },
            headerShown: false }}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="History" component={History} />
            <Tab.Screen name="Favorite" component={Favorite} />
            <Tab.Screen name="Cart" component={Cart} />
        </Tab.Navigator>
    )
}

// stacks
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Detail from './stacks/Detail'
import Setting from './stacks/Setting'
import Personal from './stacks/Personal'
import Payment from './stacks/Payment'
const Stack = createNativeStackNavigator();

const MainStackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MainTabNavigation" component={MainTabNavigation} />
            <Stack.Screen name="Detail" component={Detail} />
            <Stack.Screen name="Setting" component={Setting} />
            <Stack.Screen name="Personal" component={Personal} />
            <Stack.Screen name="Payment" component={Payment} />
        </Stack.Navigator>
    )
}

export default MainStackNavigation