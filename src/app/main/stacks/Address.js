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
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Address = () => {
  return (
    <View>
      <Text>Address</Text>
    </View>
  )
}

export default Address

const styles = StyleSheet.create({})