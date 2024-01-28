import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const Bai3_lab5 = () => {
  return (

    <ImageBackground
      style={styles.container}
      source={{ uri: 'https://jpboxinggym.com/wp-content/uploads/2023/06/solo-female-traveller-bridge-1366x2048.jpg' }}
    >
      <View style={styles.vertical}>
        <View style={[styles.horizontal]}>
          <Text style={[styles.txt_color, styles.flex]}>icon flet</Text>
          <Text style={[styles.txt_color]}>icon 3 cham</Text>
        </View>


        <View style={[styles.header]}>
          <Text style={[styles.txt_color,]}>header</Text>

        </View>
        <View style={styles.body}>
          <Text style={[styles.txt_color,]}>header</Text>

          <View style={[styles.footer]}>
            <Text style={[styles.txt_color,]}>footer</Text>
          </View>
        </View>

      </View>
    </ImageBackground>
  );
};



export default Bai3_lab5;
const styles = StyleSheet.create({
  // container
  container: {
    width: '100%',
    height: '100%',
  },
  container_mg: {
    margin: '5%'
  },
  // cloumn, row
  vertical: {
    flexDirection: 'column',
  },
  horizontal: {
    flexDirection: 'row',
  },
  // flex
  flex: {
    flex: 1,
  },
  // position
  position_asl: {
    position: 'absolute'
  },
  // text
  txt_color: {
    color: 'white',
    margin: '5%',
  },
  // custom header
  header: {
    backgroundColor: 'green',
  },
  // custom body
  body: {
    backgroundColor: 'white',
    borderStartEndRadius: 40,
    borderTopLeftRadius: 40,
    
  },
  // custom footer
  footer: {
    borderStartEndRadius: 40,
    borderTopLeftRadius: 40,
    backgroundColor: 'blue',
    height: 80,
  }

});