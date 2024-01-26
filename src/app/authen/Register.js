import { StyleSheet, Text, View, Button, Alert  } from 'react-native'
import React, {useState} from 'react'
import AxiosInstance from './helpers/AxiosInstance';

const Register = (porps) => {
  const {navigation} = porps;
  const [name, setName] = useState('Lê Anh Khoa');
  const [email, setEmail] = useState('khoala@gmail.com');
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
  if(response.status == true){
    Alert.alert('dang ky thanh cong');
    navigation.navigate('Login');
  }else{
    Alert.alert('dang ky co loi');
  }
} catch (error) {
  console.log('dang ky loi', error);
  Alert.alert('dang ky co loi');
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