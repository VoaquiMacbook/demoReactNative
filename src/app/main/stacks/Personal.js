import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'

const Personal = () => {
  return (
    <View style={asmStyle.containerAll}>
      <View>
        {/* <Text style={asmStyle.txt_color}>Asm1_settingedit_1</Text> */}
        <View style={{ marginTop: 10 }}>
          <View style={asmStyle.view_container_2_01}>
            <View style={asmStyle.view_row01}>
              <View>
                <TouchableOpacity style={[asmStyle.btn_setting01]}>
                  <View style={asmStyle.img_container01}>
                    <Image style={asmStyle.img01} source={require('../../../assets/images/arrow_left.png')}></Image>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={asmStyle.textColumn01}>
                <Text style={asmStyle.view_text_2_01}>Setting</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View>
        {/* <Text style={asmStyle.txt_color}>Asm1_settingedit_2</Text> */}
        <View style={[asmStyle.container02]}>
          {/* <Text style={asmStyle.txt_color}>Asm1_1</Text> */}
          <View style={{ alignItems: 'center' }}>
            <Image style={asmStyle.img02} source={require('../../../assets/images/img_avt.png')}>
            </Image>
          </View>
        </View>
      </View>
      <View>
        {/* <Text style={asmStyle.txt_color}>Asm1_settingedit_3</Text> */}
        <View style={{ marginTop: 50 }}>
          <View>
            <TextInput
              placeholder=' Name'
              keyboardType='default'
              style={[asmStyle.ip_input03, asmStyle.ip_color03]}>
            </TextInput>
          </View>
          <View style={{ marginTop: 20 }}>
            <TextInput
              placeholder='Emaill'
              keyboardType='email-address'
              secureTextEntry={true}
              style={[asmStyle.ip_input03, asmStyle.ip_color03]}>
            </TextInput>
          </View>
          <View style={{ marginTop: 20 }}>
            <TextInput
              placeholder='Password'
              keyboardType='default'
              secureTextEntry={true}
              style={[asmStyle.ip_input03, asmStyle.ip_color03]}>
            </TextInput>
          </View>
          <View style={{ marginTop: 20 }}>
            <TextInput
              placeholder='Re-type-password'
              keyboardType='default'
              secureTextEntry={true}
              style={[asmStyle.ip_input03, asmStyle.ip_color03]}>
            </TextInput>
          </View>
        </View>
      </View>
      <View>
      {/* <Text style={asmStyle.txt_color}>Asm1_settingedit_4</Text> */}
      <View>
            <View style={{ marginTop: 30 }}>
                <TouchableOpacity
                    style={asmStyle.btn_container04}>
                    <Text style={asmStyle.btn_text04}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
    </View>
  )
}

export default Personal

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
  // custom view
  view_container_2_01: {
    width: '99%',
    height: 60,
    borderRadius: 20,
  },
  view_text_2_01: {
    lineHeight: 53,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: '36%',


  },
  view_row01: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textColumn01: {
    flex: 1, // Để text chiếm phần còn lại của dòng
  },
  // custom img
  img01: {
    width: 20,
    height: 20,
    marginVertical: '20%',
  },
  img_container01: {
    width: '100%',
    height: '100%',
    alignItems: 'center'
  },
  // custom button setting
  btn_setting01: {
    width: 33,
    height: 35,
    backgroundColor: '#868584',
    borderRadius: 10,
    marginStart: 5,
  },
  container02: {
    flexDirection: 'column',
  },
  // custom text
  txt_color02: {
    color: 'white',

  },
  // custom img
  img02: {
    width: 150,
    height: 150,
    marginTop: 20,
  },
  // custom text
  txt_color03: {
    color: 'white'
  },
  // custom input
  ip_input03: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    height: 60,
    backgroundColor: 'white'
  },
  ip_color03: {
    color: 'gray',
    paddingStart: 10,
  },
   // custom text
   txt_color04: {
    color: 'white'
},
btn_container04: {
    flexDirection: 'column',
    backgroundColor: '#FA7C0F',
    width: '99%',
    height: 60,
    borderRadius: 20,
},
btn_text04: {
    textAlign: 'center',
    lineHeight: 53,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,

},
})