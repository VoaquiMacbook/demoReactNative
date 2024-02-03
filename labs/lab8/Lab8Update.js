import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import AxiosInstance from '../../src/app/authen/helpers/AxiosIntance2';

const Lab8Update = (props) => {
  const { navigation } = props;
  // đọc id từ màn hình List
  const id = props?.route?.params?.id;
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [avatar, setAvatar] = useState('');

  // lấy thông tin user theo id
  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await AxiosInstance().get(`/users/${id}`);
        // const data = response.data;
        //  setName(data.name);
        //  setBirthday(data.birthday);
        //  setAvatar(data.avatar);
        console.log(response);
        setName(response.name);
        setBirthday(response.birthday);
        setAvatar(response.avatar);
      } catch (error) {
        console.log(error);
      }
    }
    getUsers();
  }, [id])




  const onPressUpdate = async () => {
    try {
      const body = {
        name: name,
        birthday: birthday,
        avatar: avatar,
      }
      const response = await AxiosInstance().put(`/users/${id}`, body);
      console.log(response);
      navigation.navigate('Lab8List')
    } catch (error) {

    }
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.txt_titile]}>đây là màn hình Cập nhât</Text>
      <TextInput
        placeholder='Nhập họ tên'
        onChangeText={setName}
        value={name}
        style={styles.ip}
      // id='ip_name'
      // onChangeText={(text) => handleInputChange(text, 'name')}
      >
      </TextInput>
      <TextInput
        placeholder='Nhập ngày sinh yyyy-mm-nn'
        onChangeText={setBirthday}
        style={styles.ip}
        value={birthday}
      // id='ip_sdt'
      >
      </TextInput>
      <TextInput
        placeholder='Nhập đường link Img'
        onChangeText={setAvatar}
        value={avatar}
        style={styles.ip}
      // id='ip_pw'
      >
      </TextInput>
      <View style={styles.btn_container}>
        <TouchableOpacity
          onPress={onPressUpdate}
          style={styles.btn}>
          <Text
            style={styles.btn_text}>Save</Text>
        </TouchableOpacity>
      </View>


    </View>

  )
}

export default Lab8Update

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingVertical: '20%'
  },
  txt_titile: {
    alignSelf: 'center',
    fontSize: 30,
    color: '#FF9C25',
    fontFamily: 'Roboto-Black',
    shadowColor: 'black',
    shadowRadius: 50,
    shadowOpacity: 0,
    marginVertical: 10,

  },

  // custom textInput
  ip: {
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'gray',
    marginTop: 10,
    marginHorizontal: 15,
    paddingStart: 10,
  },
  // custom button
  btn: {
    borderRadius: 20,
    backgroundColor: 'green',
    width: 100, height: 40,
    justifyContent: 'center',
    marginEnd: 10,
    margin: 10,
  },
  btn_container: {
    width: '100%',
    height: 50,
    alignItems: 'flex-end',
  },
  btn_text: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
})