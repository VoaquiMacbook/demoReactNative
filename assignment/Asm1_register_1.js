import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const Asm1_register_1 = () => {
  return (
    <View>
      {/* <Text style={asmStyle.txt_color}>Asm1_register_1</Text> */}
      <View style={{ alignItems: 'center' }}>
                <Image style={asmStyle.img} source={require('../assignment/assets/images/pic.png')}>
                </Image>
                <View style={asmStyle.txt_container}>
                    <Text style={[asmStyle.txt_color,
                    asmStyle.txt_blob,
                    asmStyle.txt_size]}>
                        Wellcome to Lungo !!</Text>
                </View>
                <View style={asmStyle.txt_container_s}>
                    <Text 
                    style={[asmStyle.txt_color_s,
                    asmStyle.txt_blob_s,
                    asmStyle.txt_size_s]}>
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
    txt_color: {
        color: 'white'
    },
    txt_blob: {
        fontWeight: 'bold'
    },
    txt_size: {
        fontSize: 20,
    },
    txt_container: {
        marginTop: 25,
    },
    // custom img
    img: {
        width: 100,
        height: 100,
        marginTop: 20,
    },
     // custom text s
     txt_color_s: {
        color: 'gray',
    },
    txt_blob_s: {
        fontWeight: 'bold'
    },
    txt_size_s: {
        fontSize: 15,
    },
    txt_container_s: {
        marginTop: 20,
        marginBottom: 25,
        
    }
    })
// custom text
