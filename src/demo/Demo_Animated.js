import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Demo_Animated = () => {
  return (
    <View>
      <Text>Demo_Animated</Text>
    </View>
  )
}

export default Demo_Animated

// const styles = StyleSheet.create({})
// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, Image, StyleSheet, Animated } from 'react-native';

// const Lab8List = () => {
//     const [isAnimating, setAnimating] = useState(false);
//     const [opacityValue, setOpacityValue] = useState(new Animated.Value(0));

//     //   const handleButtonClick = () => {
//     //     if (!isAnimating) {
//     //       setAnimating(true);
//     //       Animated.timing(opacityValue, {
//     //         toValue: 2,
//     //         duration: 2000,
//     //         useNativeDriver: true,
//     //       }).start(() => {
//     //         setAnimating(false);
//     //         opacityValue.setValue(0);
//     //       });
//     //     }
//     //   };
//     const handleButtonClick = () => {
//         if (!isAnimating) {
//             setAnimating(true);
//             Animated.timing(opacityValue, {
//                 toValue: 5,
//                 duration: 5000,
//                 useNativeDriver: false,
//             }).start(() => {
//                 setAnimating(false);
//                 opacityValue.setValue(0);
//             });
//         }
//     };

//     return (
//         <TouchableOpacity style={styles.order} onPress={handleButtonClick}>
//             <Animated.Text style={[styles.span, { opacity: opacityValue }]}>
//                 <Image style={styles.image} source={require('../../assets/images/git_next.png')} />
//             </Animated.Text>
//         </TouchableOpacity>
//     );
// };

// const styles = StyleSheet.create({
//     order: {
//         backgroundColor: '#1C212E',
//         position: 'relative',
//         height: 40,
//         width: 100,
//         borderRadius: 32,
//         overflow: 'hidden',
//         marginTop: 20,
//         marginStart:20,
//         shadowOpacity:10,
//         shadowRadius:10,
//     },
//     span: {
//         position: 'absolute',
//         color: '#FFF',
//     },

//     image: {
//         width: 100,
//         height: 50,
//         resizeMode: 'cover',
//         // position: 'absolute',
//         // borderRadius:50,
//         shadowOpacity:10,
//         shadowRadius:10,
//         shadowColor:'black',

//     },
   
   
// });

// export default Lab8List;
