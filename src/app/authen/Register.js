import { StyleSheet, Text, View, Button, Alert, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AxiosInstance from './helpers/AxiosInstance';

const Register = (porps) => {
  const { navigation } = porps;
  const [name, setName] = useState('voaqui');
  const [email, setEmail] = useState('aqui123@gmail.com');
  const [password, setPassword] = useState('123');

  const onPressRegister = async () => {
    try {
      const body = {
        name: name,
        email: email,
        password: password,
      }
      const response = await AxiosInstance()
        .post('/users/register', body);
      console.log('dang ky thanh cong', response);
      if (response.status == true) {
        Alert.alert('dang ky thanh cong');
        navigation.navigate('Login');
      } else {
        Alert.alert('dang ky co loi');
      }
    } catch (error) {
      console.log('dang ky loi', error);
      Alert.alert('dang ky co loi');
    }
  }

  return (
    // <View>
    //   <Text>Register</Text>
    //   <Button title='Register' onPress={onPressRegister}/>
    // </View>
    <View style={asmStyle.containerAll}>
      <View>
        {/* <Text style={asmStyle.txt_color}>Asm1_register_1</Text> */}
        <View style={{ alignItems: 'center' }}>
          <Image style={asmStyle.img01} source={require('../../assets/images/img_logo.png')}>
          </Image>
          <View style={asmStyle.txt_container01}>
            <Text style={[asmStyle.txt_color01,
            asmStyle.txt_blob01,
            asmStyle.txt_size01]}>
              Wellcome to Lungo !!</Text>
          </View>
          <View style={asmStyle.txt_container_s01}>
            <Text
              style={[asmStyle.txt_color_s01,
              asmStyle.txt_blob_s01,
              asmStyle.txt_size_s01]}>
              Resgister to Continue</Text>
          </View>
        </View>
      </View>
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
      <View>
        {/* <Text style={asmStyle.txt_color}>Asm1_register_3</Text> */}
        <View style={{ marginTop: 30 }}>
          <TouchableOpacity
            onPress={onPressRegister}
            style={asmStyle.btn_container03}>
            <Text style={asmStyle.btn_text03}> Register</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        {/* <Text style={asmStyle.txt_color}>Asm1_register_4</Text> */}
        <View style={[asmStyle.row04, asmStyle.row_center04, asmStyle.row_mgtop04]}>
          <Text style={[asmStyle.txt_color_gray04]}>You have an account? Click </Text>
          <Text onPress={() => navigation.navigate('Login')} style={[asmStyle.txt_color_register04]}>Sign in </Text>
        </View>

      </View>

    </View>
  )
}

export default Register

const asmStyle = StyleSheet.create({
  containerAll: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    padding: 26,
  },
  // custom text
  txt_color01: {
    color: 'white'
  },
  txt_blob01: {
    fontWeight: 'bold'
  },
  txt_size01: {
    fontSize: 18,
  },
  txt_container01: {
    marginTop: 25,
  },
  // custom img
  img01: {
    width: 100,
    height: 100,
    marginTop: 20,
  },
  // custom text s
  txt_color_s01: {
    color: 'gray',
  },
  txt_blob_s01: {
    fontWeight: 'bold'
  },
  txt_size_s01: {
    fontSize: 12,
  },
  txt_container_s01: {
    marginTop: 20,
    marginBottom: 25,

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
    marginTop: '5%',
  }
})