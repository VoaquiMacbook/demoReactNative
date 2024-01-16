import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Asm1_settingedit_1 = () => {
  return (
    <View>
      {/* <Text style={asmStyle.txt_color}>Asm1_settingedit_1</Text> */}
      <View style={{ marginTop: 10 }}>
        <View style={asmStyle.view_container_2}>
          <View style={asmStyle.view_row}>
            <View>
              <TouchableOpacity style={[asmStyle.btn_setting]}>
                <View style={asmStyle.img_container}>
                <Image style={asmStyle.img} source={require('../assignment/assets/images/arrow_left.png')}></Image>
                </View>
              </TouchableOpacity>
            </View>
            <View style={asmStyle.textColumn}>
              <Text style={asmStyle.view_text_2}>Setting</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Asm1_settingedit_1
const asmStyle = StyleSheet.create({
    container: {
        
    },
    // custom text
    txt_color: {
        color: 'white'
    },
    // custom view
  view_container_2: {
    width: '99%',
    height: 60,
    borderRadius: 20,
  },
  view_text_2: {
    lineHeight: 53,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: '36%',


  },
  view_row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textColumn: {
    flex: 1, // Để text chiếm phần còn lại của dòng
  },
  // custom img
  img: {
    width: 20,
    height: 20,
    marginVertical: '20%',
  },
  img_container: {
    width: '100%',
    height: '100%',
    alignItems: 'center'
  },
  // custom button setting
  btn_setting: {
    width: 33,
    height: 35,
    backgroundColor: '#868584',
    borderRadius: 10,
    marginStart: 5,
  },
})