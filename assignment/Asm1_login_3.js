import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'


const Asm1_3 = () => {
  return (
    <View style={{marginTop: 15}}>
      <Text style={asmStyle.txt_color}>Asm1_3</Text>
      <View style={{ marginTop: 10 }}>
        <TouchableOpacity
          style={asmStyle.btn_container}>
          <Text style={asmStyle.btn_text}> Sign in</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 10 }}>
        <TouchableOpacity
          style={asmStyle.btn_container_2}>
          <View style={asmStyle.btn_row}>
            <View>
              <Image style={asmStyle.img} source={require('../assignment/assets/images/google.png')}></Image>
            </View>
            <View style={asmStyle.textColumn}>
              <Text style={asmStyle.btn_text_2}> Sign In with Google</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

    </View>

  )
}

export default Asm1_3
const asmStyle = StyleSheet.create({
  container: {

  },
  // custom text
  txt_color: {
    color: 'white'
  },
  // custom touchableOpacity 
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
  // custom touchableOpacity 2
  btn_container_2: {
    backgroundColor: '#FFFFFF',
    width: '99%',
    height: 60,
    borderRadius: 20,
  },
  btn_text_2: {
    lineHeight: 53,
    color: 'black',
    fontSize: 18,
    paddingStart: '24%',

  },
  btn_row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textColumn: {
    flex: 1, // Để text chiếm phần còn lại của dòng
  },
  // custom img
  img: {
    padding: 10,
    marginStart: 24,
    width: 20,
    height: 20,
  },
})