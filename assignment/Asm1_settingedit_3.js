import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'

const Asm1_settingedit_3 = () => {
  return (
    <View>
      {/* <Text style={asmStyle.txt_color}>Asm1_settingedit_3</Text> */}
      <View style={{marginTop: 50}}>
            <View>
                <TextInput
                    placeholder=' Name'
                    keyboardType='default'
                    style={[asmStyle.ip_input, asmStyle.ip_color]}>
                </TextInput>
            </View>
            <View style={{ marginTop: 20 }}>
                <TextInput
                    placeholder='Emaill'
                    keyboardType='email-address'
                    secureTextEntry={true}
                    style={[asmStyle.ip_input, asmStyle.ip_color]}>
                </TextInput>
            </View>
            <View style={{ marginTop: 20 }}>
                <TextInput
                    placeholder='Password'
                    keyboardType='default'
                    secureTextEntry={true}
                    style={[asmStyle.ip_input, asmStyle.ip_color]}>
                </TextInput>
            </View>
            <View style={{ marginTop: 20 }}>
                <TextInput
                    placeholder='Re-type-password'
                    keyboardType='default'
                    secureTextEntry={true}
                    style={[asmStyle.ip_input, asmStyle.ip_color]}>
                </TextInput>
            </View>
        </View>
    </View>
  )
}

export default Asm1_settingedit_3
const asmStyle = StyleSheet.create({
    container: {
        
    },
    // custom text
    txt_color: {
        color: 'white'
    },
     // custom input
     ip_input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        height: 60,
        backgroundColor: 'white'
    },
    ip_color: {
        color: 'gray',
        paddingStart: 10,
    }
})