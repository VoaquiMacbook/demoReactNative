import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Asm1_settingedit_4 = () => {
  return (
    <View>
      {/* <Text style={asmStyle.txt_color}>Asm1_settingedit_4</Text> */}
      <View>
            <View style={{ marginTop: 30 }}>
                <TouchableOpacity
                    style={asmStyle.btn_container}>
                    <Text style={asmStyle.btn_text}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default Asm1_settingedit_4
const asmStyle = StyleSheet.create({
    container: {
        
    },
     // custom text
     txt_color: {
        color: 'white'
    },
    btn_container: {
        flexDirection: 'column',
        backgroundColor: '#FA7C0F',
        width: '99%',
        height: 60,
        borderRadius: 20,
    },
    btn_text: {
        textAlign: 'center',
        lineHeight: 53,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17,

    },
})