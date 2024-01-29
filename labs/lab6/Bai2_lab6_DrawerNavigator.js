import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();

const Screen1 = (props) => {
    const {navigation} = props;
    
    return (
        <View>
            <Text>Screen 1</Text>
        </View>
    )
}
const Screen2 = (props) => {
    const {navigation} = props;
    
    return (
        <View>
            <Text>Screen 2</Text>
        </View>
    )
}
const Screen3 = (props) => {
    const {navigation} = props;
    
    return (
        <View>
            <Text>Screen 3</Text>
        </View>
    )
}
const Bai2_lab6_DrawerNavigator = (props) => {

    return (
        <Drawer.Navigator 
            
        >
            <Drawer.Screen name="Screen1" component={Screen1} />
            <Drawer.Screen name="Screen2" component={Screen2} />
            <Drawer.Screen name="Screen3" component={Screen3} />
        </Drawer.Navigator>
    )
}

export default Bai2_lab6_DrawerNavigator

const styles = StyleSheet.create({})