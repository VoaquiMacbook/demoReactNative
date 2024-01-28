import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const Demo11_1_nextPage = (props) => {
    const {navigation} = props
    return (
        <View >
            <Text>Demo11_1_nextPage</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('')}
                style={styles.buttonGG}>
                <Text style={styles.buttonGGLabel}>next page </Text>
            </TouchableOpacity>
        </View>
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