import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
const Asm1_login_4 = () => {
    return (
        <View style={{marginTop: '15%'}}>
            {/* <Text style={asmStyle.txt_color}>Asm1_login_4</Text> */}
            <View style={{ flexDirection: 'column' }}>
                <View style={[asmStyle.row03, asmStyle.row_center03]}>
                    <Text style={[asmStyle.txt_color_gray03]}>Don't have account? Click </Text>
                    <Text style={[asmStyle.txt_color_register03]}>Register</Text>
                </View>
                <View style={[asmStyle.row03, asmStyle.row_center03, asmStyle.row_mgtop03]}>
                    <Text style={[asmStyle.txt_color_gray03]}>Forget Password? Click </Text>
                    <Text style={[asmStyle.txt_color_register03]}>Reset</Text>
                </View>
            </View>
        </View>
    )
}

export default Asm1_login_4
const asmStyle = StyleSheet.create({
    // custom text
    txt_color03: {
        color: 'white',

    },
    txt_color_register03: {
        color: '#FA7C0F',
        fontWeight: 'bold'
    },
    txt_color_gray03: {
        color: 'gray',
        fontWeight: 'bold',
        fontSize: 15,

    },
    // custom row
    row03: {
        flexDirection: 'row',
    },
    row_flex03: {
        flex: 1, // Để text chiếm phần còn lại của dòng
    },
    row_center03: {
        justifyContent: 'center'
    },
    row_mgtop03:{
        marginTop: 20,
    }


})