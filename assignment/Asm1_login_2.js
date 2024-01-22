import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Alert } from 'react-native'
import React, { useState } from 'react'

const Asm1_2 = () => {
  const [name, setName] = useState('');
  // state quản lý bắt lỗi
  const [isNameValid, setIsNamevalid] = useState(true);
  const [messenger, setMessenger] = useState('')
  const handleOnSubmit = () => {
    if (!name || name.length < 3) {
      setIsNamevalid(false);
      setMessenger('Password is not true. Try Again!')
      return;
    }
    setIsNamevalid(true);
    setMessenger('')
    return;
  }
  // state manage hidden
  const [securePassword, setSecurePassword] = useState(true);
  return (
    <View style={asmStyle.container}>
      {/* <Text style={asmStyle.txt_color}>Asm1_2</Text> */}
      <View>
        <TextInput
          placeholder=' Emall Address'
          keyboardType='email-address'
          style={[asmStyle.ip_input, asmStyle.ip_color]}>
        </TextInput>
      </View>
      <View style={{ marginTop: 20 }}>
        <TextInput
          placeholder='Password'
          keyboardType='default'
          secureTextEntry={securePassword}
          style={[asmStyle.ip_input, asmStyle.ip_color,
          !isNameValid && asmStyle.error]}
          value={name}
          onChangeText={text => setName(text)}>
        </TextInput>
        <TouchableOpacity
          onPress={() => setSecurePassword(!securePassword)} f
          style={asmStyle.ic_eye}>
          {
            securePassword ?
              <Image source={require('../assignment/assets/images/ic_eyeOpen.png')} />
              :
              <Image source={require('../assignment/assets/images/ic_eyeLock.png')} />
          }
        </TouchableOpacity>
      </View>

      {!isNameValid && <Text style={{ color: 'red' }}>{messenger}</Text>}

      <View style={{ marginTop: 15 }}>
        <View style={{ marginTop: 10 }}>
          <TouchableOpacity
            onPress={handleOnSubmit}
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
    </View>
  )
}

export default Asm1_2
const asmStyle = StyleSheet.create({
  // custom text
  txt_color: {
    color: 'white'
  },
  // custom input
  ip_input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    height: 50,
    backgroundColor: 'white'
  },
  ip_color: {
    color: 'gray',
    paddingStart: 10,
  },
  // demo
  error: {
    borderWidth: 2,
    borderColor: 'red',
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
  // custom eye
  ic_eye: {
    position: 'absolute',
    right: 15,
    top: 15,
    width: 30,
    height: 19,
  },


})
