import * as React from 'react';
import { Text, View, Image, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createMaterialTopTabNavigator();
const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
            <Button
                title="Go to Settings"
                onPress={() => navigation.navigate('Settings')}
            />
        </View>
    );
}

function SettingsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
            <Button title="Go to Home" onPress={() => navigation.navigate('home')} />
        </View>
    );
}

function PaymentScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Payment!</Text>
            <Button title="Go to Home" onPress={() => navigation.navigate('home')} />
        </View>
    );
}

function HistoryScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>History!</Text>
            <Button title="Go to Home" onPress={() => navigation.navigate('home')} />
        </View>
    );
}

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

function TopTabs() {
    return (
        <Tab.Navigator
            // tabBarPosition="bottom" 
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#31374A',
                    marginEnd:10,
                    marginStart:10,
                    borderTopRightRadius:30,
                    borderTopLeftRadius:30,
                    borderRadius:0,
                },
                tabBarLabelStyle: {
                    color: 'white'
                },
                // tabBarShowLabel: false,
            }}>
            <Tab.Screen
                name="Cho bạn"
                component={YeuthichScreen}
                options={{
                    tabBarIcon: ({ route, focused }) => (

                        // <Image
                        //     style={{ tintColor: focused ? 'white' : 'gray' }}
                        //     source={require('../../assets/images/ic_help.png')}
                        // />
                        <Text style={{ fontSize: focused ? 23.8 : 8, height:60  }}>👤</Text>

                    ),

                }}
            />
            <Tab.Screen
                name="PHỔ BIẾN"
                component={PhobienScreen}
                options={{
                    tabBarIcon: ({ route, focused }) => (
                        // <Image
                        //     style={{ tintColor: focused ? 'white' : 'gray' }}
                        //     source={require('../../assets/images/ic_help.png')}
                        // />
                        <Text style={{ fontSize: focused ? 24 : 8, height:60  }}>♥️</Text>
                    ),
                }}
            />
            <Tab.Screen
                name="TRỰC TIẾP"
                component={TructiepScreen}
                options={{
                    tabBarIcon: ({ route, focused }) => (

                        // <Image
                        //     style={{ tintColor: focused ? 'white' : 'gray' }}
                        //     source={require('../../assets/images/ic_help.png')}
                        // />
                        
                            <Text style={{ fontSize: focused ? 24 : 8, height:50  }}>📡</Text>
                       


                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default function Bai3_lab7() {
    return (
        <NavigationContainer>
            <BottomTab.Navigator
                screenOptions={({ route }) => ({
                    tabBarStyle: {
                        height: 60,
                        backgroundColor: '#31374A',
                        borderRadius: 28,
                        marginBottom: 10,
                        marginStart: '3%',
                        marginEnd: '3%',
                        padding: 10,
                        paddingBottom: '2%',
                    },
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName = focused;
                        if (route.name == 'home') {
                            if (iconName) {
                                return <View style={styles.ic_bottom_on}><Image style={styles.ic_bottom} source={require('../../assets/images/ic_home.png')} /></View> 
                            }
                            return <Image style={{ tintColor: 'gray' }} source={require('../../assets/images/ic_home.png')} />
                        }
                        if (route.name == 'settings') {
                            if (iconName) {
                                return <View style={styles.ic_bottom_on}><Image style={styles.ic_bottom} source={require('../../assets/images/ic_payment.png')} /></View>
                            }
                            return <Image style={{ tintColor: 'gray' }} source={require('../../assets/images/ic_payment.png')} />
                        }
                        if (route.name == 'payment') {
                            if (iconName) {
                                return <View style={styles.ic_bottom_on}><Image style={styles.ic_bottom} source={require('../../assets/images/ic_logout.png')} /></View> 
                            }
                            return <Image style={{ tintColor: 'gray' }} source={require('../../assets/images/ic_logout.png')} />
                        }
                        if (route.name == 'history') {
                            if (iconName) {
                                return <View style={styles.ic_bottom_on}><Image style={styles.ic_bottom} source={require('../../assets/images/ic_payment.png')} /></View> 
                            }
                            return <Image style={{ tintColor: 'gray', alignSelf:'center' }} source={require('../../assets/images/ic_payment.png')} />
                        }
                    },
                    tabBarActiveTintColor: 'white',
                    tabBarInactiveTintColor: 'gray',
                })}>
                <Stack.Screen name="home" component={TopTabs} />
                <Stack.Screen name="settings" component={SettingsScreen} />
                <Stack.Screen name="payment" component={PaymentScreen} />
                <Stack.Screen name="history" component={HistoryScreen} />
            </BottomTab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    //custom ic bottom
    ic_bottom: {
        tintColor: 'black',
        alignSelf:'center',
    },
    //on
    ic_bottom_on:{backgroundColor:'white', borderRadius:10, width:50, height:24}
    
});
