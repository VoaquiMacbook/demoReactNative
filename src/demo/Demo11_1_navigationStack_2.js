import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Bai1_lab5 from '../../labs/lab5/Bai1_lab5';
import Bai2_lab5 from '../../labs/lab5/Bai2_lab5';
import Bai4_lab5 from '../../labs/lab5/Bai4_lab5';

const Stack = createNativeStackNavigator();
const Demo11_1_nextPage = (props) => {
    const {navigation} = props;
    return (
        // <View >
        //     <Text>Demo11_1_nextPage</Text>
        //     <TouchableOpacity
        //     onPress={goToDemo11_font}
        //         style={styles.buttonGG}>
        //         <Text style={styles.buttonGGLabel}>next page </Text>
        //     </TouchableOpacity>
            
        // </View>
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
            initialRouteName='Bai4_lab5'>
            <Stack.Screen name="Bai1_lab5" component={Bai1_lab5} />
            <Stack.Screen name="Bai2_lab5" component={Bai2_lab5} />
            <Stack.Screen name="Bai4_lab5" component={Bai4_lab5} />
        </Stack.Navigator>
    </NavigationContainer>
        
    )
}

export default Demo11_1_nextPage

const styles = StyleSheet.create({
    buttonGG:{
        width:100,
        height:50,
        backgroundColor:'green',
        borderRadius:10,
        justifyContent:'center',
        margin:'10%'
    },
    buttonGGLabel:{
        color:'white',
        alignSelf:'center',
        fontWeight:'bold',
    }
})