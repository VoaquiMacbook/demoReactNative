import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AppNavigation from './src/app/AppNavigation';
import { AppProvider } from './src/app/AppContext';
// import demo
import Demo1 from './src/demo/Demo1';
import Demo2 from './src/demo/Demo2';
import Demo3 from './src/demo/Demo3';
import Demo4 from './src/demo/Demo4';
import Demo4_1 from './src/demo/Demo4_1';
import Demo5 from './src/demo/Demo5';
import Demo6 from './src/demo/Demo6';
import Demo7 from './src/demo/Demo7';
import Demo_secureTextEtry from './src/demo/Demo_secureTextEtry';
import Demo_alert from './src/demo/Demo9_alert';
import Demo8_1_modal from './src/demo/Demo9_1_modal';
import Demo9_2_toogle from './src/demo/Demo9_2_toogle';
// import demo js nangCao
import Arrays from './java_js_nangcao/section9/Arrays';
import Objects from './java_js_nangcao/section9/Objects';
import SpreadOpertor from './java_js_nangcao/section9/SpreadOpertor';
// import lab 
import Bai1 from './labs/lab2/Bai1';
import Bai2 from './labs/lab2/Bai2';
import Bai3 from './labs/lab2/Bai3';
import Bai1_lab3 from './labs/lab3/Bai1_lab3';
import Bai1_lab4 from './labs/lab4/Bai1_lab4';
import Bai2_lab4 from './labs/lab4/Bai2_lab4';
import Bai3_lab3 from './labs/lab3/Bai3_lab3';
import Lab4_bai3 from './labs/lab4/Lab4_bai3';
// import assignment
import Asm1 from './assignment/Asm1';
import Bai2_lab3 from './labs/lab3/Bai2_lab3';
// asm
import Login from './assignment/Login';
import Setting from './src/app/main/stacks/Setting';
import Personal from './src/app/main/stacks/Personal';


function App(): React.JSX.Element {

  return (
    // <SafeAreaView>
    //   <StatusBar />
    //   <View>
    //     {/* <Text style={styles.welcome}>Võ A Qui</Text> */}
    //     {/* <Asm1></Asm1> */}
    //     <Login />
    //   </View>
    // </SafeAreaView>

    <AppProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar />
        {/* <AppNavigation /> */}
        <Personal />
      </SafeAreaView>
    </AppProvider>
  );
};

export default App;
const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    color: 'green',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});