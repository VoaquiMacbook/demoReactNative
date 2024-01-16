import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
const Asm1_login_4 = () => {
    return (
        <View style={{marginTop: 25}}>
            {/* <Text style={asmStyle.txt_color}>Asm1_login_4</Text> */}
            <View style={{ flexDirection: 'column' }}>
                <View style={[asmStyle.row, asmStyle.row_center]}>
                    <Text style={[asmStyle.txt_color_gray]}>Don't have account? Click </Text>
                    <Text style={[asmStyle.txt_color_register]}>Register</Text>
                </View>
                <View style={[asmStyle.row, asmStyle.row_center, asmStyle.row_mgtop]}>
                    <Text style={[asmStyle.txt_color_gray]}>Forget Password? Click </Text>
                    <Text style={[asmStyle.txt_color_register]}>Reset</Text>
                </View>
            </View>
        </View>
    )
}

export default Asm1_login_4
const asmStyle = StyleSheet.create({
    container: {

    },
    // custom text
    txt_color: {
        color: 'white',

    },
    txt_color_register: {
        color: '#FA7C0F',
        fontWeight: 'bold'
    },
    txt_color_gray: {
        color: 'gray',
        fontWeight: 'bold',
        fontSize: 15,

    },
    // custom row
    row: {
        flexDirection: 'row',
    },
    row_flex: {
        flex: 1, // Để text chiếm phần còn lại của dòng
    },
    row_center: {
        justifyContent: 'center'
    },
    row_mgtop:{
        marginTop: 20,
    }


})