import { View, Text, TouchableOpacity, StyleSheet, Pressable, Modal, Alert, BackHandler } from 'react-native'
import React, { useState, useEffect } from 'react'

const Bai3_lab3 = () => {
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackPress
    );

    return () => backHandler.remove();
  }, []);

  const handleBackPress = () => {
    if (modalVisible) {
      Alert.alert(
        'Thông báo',
        'Bạn đã tắt modal bằng nút back của thiết bị',
        [{ text: 'OK', onPress: () => setModalVisible(false) }]
      );
      return true; // Prevent default behavior (exit the app)
    }
    return false; // Default behavior (exit the current screen)
  };
  return (
    <View>
 <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      

      {/* <Pressable
      style={[styles.button, styles.buttonOpen]}
      onPress={() => setModalVisible(true)}>
      <Text style={styles.textStyle}>Show Modal</Text>
    </Pressable> */}
    </View>
    <View style={{marginHorizontal:'37%', marginVertical:'75%'}}>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={[styles.btn]}>
          <Text style={styles.btn_text}>Mở modal</Text>
        </TouchableOpacity>
      </View>
      
    </View>
   
  )
}
export default Bai3_lab3
const styles = StyleSheet.create({

  // custom button
  btn: {
    borderRadius: 10,
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

  // custom modal
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: 'red',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
})
