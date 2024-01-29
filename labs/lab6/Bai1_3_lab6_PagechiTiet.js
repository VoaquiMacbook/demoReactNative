import { Button, StyleSheet, Text, View, } from 'react-native'
import React from 'react'

const Bai1_3_lab6_PagechiTiet = (props) => {
  const { navigation } = props;

  // Trở lại bằng goBack
  const goBack = () => {
    // navigation.navigate('Bai1_lab6_PageChinh'); // goBack C1
    navigation.goBack();                           // goBack C2 
    //  goBack C3  chuyền thẳng  onPress={navigation.goBack}
  }
  // Trở lại bằng reset
  const reset = () => {
    navigation.reset({ routes: [{ name: 'Bai1_lab6_PageChinh' }] }); // resets C1
    //  reset C2  chuyền thẳng () => navigation.reset({routes: [{name: 'Bai1_lab6_PageChinh'}]})
  }
  // Trở lại bằng pop
  const pop = () => {
    navigation.pop();
  }
  // Trở lại bằng popToTop
  const popToTop = () => {
    navigation.popToTop();
  }




  const name = props.route?.params?.name; // nhận data C2
  const phone = props.route?.params?.phone; // nhận data C2
  const password = props.route?.params?.password; // nhận data C2

  return (
    <View style={styles.container}>
      <Text style={styles.txt_titile}>☺️ Chào bạn, {name} </Text>

      <Text style={styles.txt_titile_s}>Tài khoản bạn Là: {name}</Text>
      <Text style={styles.txt_titile_s}>Mật khẩu bạn Là: {password}</Text>
      <Text style={styles.txt_titile_s}>SĐT của bạn Là: {phone} </Text>

      <View style={styles.buttonContainer}>
        <Button title='Trở lại bằng -- goBack --' onPress={navigation.goBack}></Button>

        <Button title='Trở lại bằng -- reset --' onPress={() => navigation.reset({ routes: [{ name: 'Bai1_lab6_PageChinh' }] })}></Button>

        <Button title='Trở lại bằng -- pop --' onPress={() => navigation.pop()}></Button>

        <Button title='Trở lại bằng -- popToTop --' onPress={() => navigation.popToTop()}></Button>
      </View>

    </View>
  )
}

export default Bai1_3_lab6_PagechiTiet

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: '5%'
  },
  txt_titile: {
    fontSize: 20,
    fontWeight: '800',
    color: '#154E9B',
    marginBottom: '5%',
  },
  txt_titile_s: {
    marginBottom: '1%',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonContainer: {
    marginTop: '30%',

  },

})