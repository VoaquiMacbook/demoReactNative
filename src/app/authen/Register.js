import { StyleSheet, Text, View, Button, Alert  } from 'react-native'
import React, {useState} from 'react'
import AxiosInstance from './helpers/AxiosInstance';

const Register = (porps) => {
  const [name, setName] = useState('Võ A Qui');
  const [email, setEmail] = useState('khoale@gmail.com');
  const [password, setPassword] = useState('123');

  const onPressRegister = async () => {
    try {
      const body ={
        name: name,
        email: email,
        password: password,
      }
      const response = await AxiosInstance()
      .post('/users/register', body)
      console.log('Đăng ký thành công', response);
      }catch (error) {
     const body ={
        name: name,
        email: email,
        password: password,
      }
      const response = await AxiosInstance()
      .post('/users/register', body)
      console.log('Đăng ký thành công', response);
    }
  }
  return (
    <View>
      <Text>Register</Text>
      <Button title='Register' onPress={onPressRegister}/>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({})