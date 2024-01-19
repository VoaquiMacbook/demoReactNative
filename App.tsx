import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
// import demo
import Demo1 from './src/demo/Demo1';
import Demo2 from './src/demo/Demo2';
import Demo3 from './src/demo/Demo3';
import Demo4 from './src/demo/Demo4';
import Demo4_1 from './src/demo/Demo4_1';
import Demo5 from './src/demo/Demo5';
import Demo6 from './src/demo/Demo6';
import Demo7 from './src/demo/Demo7';
// import demo js nangCao
import Arrays from './java_js_nangcao/section9/Arrays';
import Objects from './java_js_nangcao/section9/Objects';
import SpreadOpertor from './java_js_nangcao/section9/SpreadOpertor';
// import lab 
import Bai1 from './labs/lab2/Bai1';
import Bai2 from './labs/lab2/Bai2';
import Bai3 from './labs/lab2/Bai3';
import Bai1_lab3 from './labs/lab3/Bai1_lab3';
// import assignment
import Asm1 from './assignment/Asm1';

function App(): React.JSX.Element {

  return (
    <SafeAreaView>
      <StatusBar />
      <View>
        <Text style={myDemo1Style.welcome}>Võ A Qui</Text> 
        {/* <Asm1></Asm1> */}
      <Bai1_lab3></Bai1_lab3>
      </View>
    </SafeAreaView>
  );
};

export default App;
const myDemo1Style = StyleSheet.create({
  welcome: {
    fontSize: 20,
    color: 'green',
    fontWeight: 'bold',
    textAlign: 'center'
  }
})