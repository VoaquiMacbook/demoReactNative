import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Asm1_register_4 = () => {
    return (
        <View>
            {/* <Text style={asmStyle.txt_color}>Asm1_register_4</Text> */}
            <View style={[asmStyle.row, asmStyle.row_center, asmStyle.row_mgtop]}>
                <Text style={[asmStyle.txt_color_gray]}>You have an account? Click </Text>
                <Text style={[asmStyle.txt_color_register]}>Sign in </Text>
            </View>

        </View>
    )
}

export default Asm1_register_4
const asmStyle = StyleSheet.create({
    container: {


    },
    // custom text
    txt_color04: {
        color: 'white',

    },
    txt_color_register04: {
        color: '#FA7C0F',
        fontWeight: 'bold'
    },
    txt_color_gray04: {
        color: 'gray',
        fontWeight: 'bold',
        fontSize: 15,

    },
    // custom row
    row04: {
        flexDirection: 'row',
    },
    row_flex04: {
        flex: 1, // Để text chiếm phần còn lại của dòng
    },
    row_center04: {
        justifyContent: 'center'
    },
    row_mgtop04: {
        marginTop: 5,
    }
})