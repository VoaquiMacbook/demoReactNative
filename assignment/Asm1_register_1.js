import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const Asm1_register_1 = () => {
  return (
    <View>
      {/* <Text style={asmStyle.txt_color}>Asm1_register_1</Text> */}
      <View style={{ alignItems: 'center' }}>
                <Image style={asmStyle.img01} source={require('../assignment/assets/images/pic.png')}>
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
  )
}

export default Asm1_register_1
const asmStyle = StyleSheet.create({
    container: {
       
    },
    // custom text
    txt_color01: {
        color: 'white'
    },
    txt_blob01: {
        fontWeight: 'bold'
    },
    txt_size01: {
        fontSize: 20,
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
        fontSize: 15,
    },
    txt_container_s01: {
        marginTop: 20,
        marginBottom: 25,
        
    }
    })
// custom text
