import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Asm1_register_3 = () => {
    return (
        <View>
            {/* <Text style={asmStyle.txt_color}>Asm1_register_3</Text> */}
            <View style={{ marginTop: 30 }}>
                <TouchableOpacity
                    style={asmStyle.btn_container03}>
                    <Text style={asmStyle.btn_text03}> Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Asm1_register_3
const asmStyle = StyleSheet.create({
    container: {

    },
    // custom text
    txt_color03: {
        color: 'white'
    },
    // custom touchableOpacity 
    btn_container03: {
        flexDirection: 'column',
        backgroundColor: '#FA7C0F',
        width: '99%',
        height: 60,
        borderRadius: 20,
    },
    btn_text03: {
        textAlign: 'center',
        lineHeight: 53,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17,

    },

})