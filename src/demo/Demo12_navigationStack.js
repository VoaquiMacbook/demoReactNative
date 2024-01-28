import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Screen1 = (props) => {
    const {navigation} = props;
    const goToScreen2 = () => {
        navigation.navigate('Screen2', {name: 'Võ A Qui', age: 20 }); // cách chuyền data
    }
    return (
        <View>
            <Text onPress={goToScreen2}>go to Screen 2</Text>
        </View>
    )
}

const Screen2 = (props) => {
    // const {navigation, route: { params: { name, age } } } = props;  // nhận data C1

    // const name = props.route?.params?.name; // nhận data C2
    
    const goToScreen1 = () => {
        navigation.navigate('Screen1');
    }
    return (
        <View>
            <Text onPress={goToScreen1}>go to Screen 1 {name} </Text>
        </View>
    )
}

const Screen3 = (props) => {
    const {navigation} = props;
     const goToScreen2 = () => {
        navigation.navigate('Screen2');
    }
    return (
        <View>
            <Text>Screen3</Text>
        </View>
    )
}

const Demo12_navigationStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: true,
                    // headerStyle:{
                    //     backgroundColor:'#f4511e'
                    // },
                    // headerTintColor:'#fff',
                    // headerTitleStyle:{
                    //     fontWeight:'bold',
                    // },

                    }}
                initialRouteName='Screen1'>
                <Stack.Screen name="Screen1" component={Screen1} />
                <Stack.Screen name="Screen2" component={Screen2} />
                <Stack.Screen name="Screen3" component={Screen3} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Demo12_navigationStack

const styles = StyleSheet.create({})