import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'

const Asm1_register_2 = () => {
    return (
        <View>
            {/* <Text style={asmStyle.txt_color}>Asm1_register_2</Text> */}
            <View>
                <TextInput
                    placeholder=' Name'
                    keyboardType='default'
                    style={[asmStyle.ip_input02, asmStyle.ip_color02]}>
                </TextInput>
            </View>
            <View style={{ marginTop: 20 }}>
                <TextInput
                    placeholder='Emaill'
                    keyboardType='email-address'
                    secureTextEntry={true}
                    style={[asmStyle.ip_input02, asmStyle.ip_color02]}>
                </TextInput>
            </View>
            <View style={{ marginTop: 20 }}>
                <TextInput
                    placeholder='Password'
                    keyboardType='default'
                    secureTextEntry={true}
                    style={[asmStyle.ip_input02, asmStyle.ip_color02]}>
                </TextInput>
            </View>
            <View style={{ marginTop: 20 }}>
                <TextInput
                    placeholder='Re-type-password'
                    keyboardType='default'
                    secureTextEntry={true}
                    style={[asmStyle.ip_input02, asmStyle.ip_color02]}>
                </TextInput>
            </View>
        </View>
    )
}

export default Asm1_register_2
const asmStyle = StyleSheet.create({
    container: {

    },
    // custom text
    txt_color02: {
        color: 'white'
    },
    // custom input
    ip_input02: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        height: 50,
        backgroundColor: 'white'
    },
    ip_color02: {
        color: 'gray',
        paddingStart: 10,
    }




})