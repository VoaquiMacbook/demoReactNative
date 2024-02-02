import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
// login
import Asm1_1 from './Asm1_login_1'
import Asm1_2 from './Asm1_login_2'
import Asm1_3 from './Asm1_login_3'
import Asm1_login_4 from './Asm1_login_4'
// register
import Asm1_register_1 from './Asm1_register_1'
import Asm1_register_2 from './Asm1_register_2'
import Asm1_register_3 from './Asm1_register_3'
import Asm1_register_4 from './Asm1_register_4'
// setting
import Asm1_setting_1 from './Asm1_setting_1'
import Asm1_setting_2 from './Asm1_setting_2'
// setting edit
import Asm1_settingedit_1 from './Asm1_settingedit_1'
import Asm1_settingedit_2 from './Asm1_settingedit_2'
import Asm1_settingedit_3 from './Asm1_settingedit_3'
import Asm1_settingedit_4 from './Asm1_settingedit_4'
const Asm1 = () => {
    return (
        <View style={asmStyle.container}>
            <Text>Asm1</Text>
            <Asm1_1></Asm1_1>
            <Asm1_2></Asm1_2>
            <Asm1_login_4></Asm1_login_4>
            {/* <Asm1_3></Asm1_3> */}
           

            {/* <Asm1_register_1></Asm1_register_1>
            <Asm1_register_2></Asm1_register_2>
            <Asm1_register_3></Asm1_register_3>
            <Asm1_register_4></Asm1_register_4> */}

            {/* <Asm1_setting_1></Asm1_setting_1>
            <Asm1_setting_2></Asm1_setting_2> */}

            {/* <Asm1_settingedit_1></Asm1_settingedit_1>
            <Asm1_settingedit_2></Asm1_settingedit_2>
            <Asm1_settingedit_3></Asm1_settingedit_3>
            <Asm1_settingedit_4></Asm1_settingedit_4> */}
        </View>
    )
}

export default Asm1
const asmStyle = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
    },
})
// import React, { Component } from 'react';
// import { StyleSheet, View } from 'react-native';
// import MapboxGL from '@react-native-mapbox-gl/maps';

// MapboxGL.setAccessToken('<YOUR_ACCESSTOKEN>');

// const styles = StyleSheet.create({
//   page: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF'
//   },
//   container: {
//     height: 300,
//     width: 300,
//     backgroundColor: 'tomato'
//   },
//   map: {
//     flex: 1
//   }
// });

// export default class Address extends Component {
//   render() {
//     return (
//       <View style={styles.page}>
//         <View style={styles.container}>
//           <MapboxGL.MapView style={styles.map} />
//         </View>
//       </View>
//     );
//   }
// }