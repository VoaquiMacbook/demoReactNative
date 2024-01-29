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
                    style={[asmStyle.ip_input03, asmStyle.ip_color03]}>
                </TextInput>
            </View>
            <View style={{ marginTop: 20 }}>
                <TextInput
                    placeholder='Emaill'
                    keyboardType='email-address'
                    secureTextEntry={true}
                    style={[asmStyle.ip_input03, asmStyle.ip_color03]}>
                </TextInput>
            </View>
            <View style={{ marginTop: 20 }}>
                <TextInput
                    placeholder='Password'
                    keyboardType='default'
                    secureTextEntry={true}
                    style={[asmStyle.ip_input03, asmStyle.ip_color03]}>
                </TextInput>
            </View>
            <View style={{ marginTop: 20 }}>
                <TextInput
                    placeholder='Re-type-password'
                    keyboardType='default'
                    secureTextEntry={true}
                    style={[asmStyle.ip_input03, asmStyle.ip_color03]}>
                </TextInput>
            </View>
        </View>
    </View>
  )
}

export default Asm1_settingedit_3
const asmStyle = StyleSheet.create({
    container03: {
        
    },
    // custom text
    txt_color03: {
        color: 'white'
    },
     // custom input
     ip_input03: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        height: 60,
        backgroundColor: 'white'
    },
    ip_color03: {
        color: 'gray',
        paddingStart: 10,
    }
})