import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const Asm1_settingedit_2 = () => {
  return (
    <View>
      {/* <Text style={asmStyle.txt_color}>Asm1_settingedit_2</Text> */}
      <View style={[asmStyle.container]}>
        {/* <Text style={asmStyle.txt_color}>Asm1_1</Text> */}
        <View style={{ alignItems: 'center' }}>
          <Image style={asmStyle.img} source={require('../assignment/assets/images/img_avt.png')}>
          </Image>
        </View>
      </View>
    </View>
  )
}

export default Asm1_settingedit_2
const asmStyle = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  // custom text
  txt_color: {
    color: 'white',

  },
  // custom img
  img: {
    width: 150,
    height: 150,
    marginTop: 20,
  },

})