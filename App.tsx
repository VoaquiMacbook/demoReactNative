import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
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
import Bai2_lab3 from './labs/lab3/Bai2_lab3';
import Bai3_lab3 from './labs/lab3/Bai3_lab3';
import Bai1_lab4 from './labs/lab4/Bai1_lab4';
import Bai2_lab4 from './labs/lab4/Bai2_lab4';
import Lab4_bai3 from './labs/lab4/bai3_Lab4';
import Bai1_lab5 from './labs/lab5/Bai1_lab5';
import Bai2_lab5 from './labs/lab5/Bai2_lab5';
import Bai3_lab5 from './labs/lab5/Bai3_lab5';
import Bai4_lab5 from './labs/lab5/Bai4_lab5';
// import assignment
import Asm1 from './assignment/Asm1';




function App(): React.JSX.Element {

  return (
    <SafeAreaView>
      <View >
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />

        {/* <Text style={styles.welcome}>Võ A Qui</Text> */}
        {/* <Asm1></Asm1> */}
        {/* <Bai2_lab5 /> */}
      {/* <Bai3_lab5/> */}
      <Bai4_lab5/>

      </View>
    </SafeAreaView>


    // <ImageBackground
    //     style={styles.background2}
    //     source={{ uri: 'https://jpboxinggym.com/wp-content/uploads/2023/06/solo-female-traveller-bridge-1366x2048.jpg' }}>
    //     <View style={styles.content2}>
    //       {/* Nội dung ứng dụng */}
    //       <Text style={styles.txt_content2}>Discover world with us</Text>
    //       <Text style={styles.txt_content_s2}>
    //         Lorem ipsum dolor sit amet, consectertur
    //       </Text>
    //       <Text style={styles.txt_content_s2}>
    //         adipiscing elit. Proin ut sem non erat vehicula
    //       </Text>
    //       <Text style={styles.txt_content_s2}>
    //         dignissim. Morbi eget congue ante, feugiat.
    //       </Text>
    //       <TouchableOpacity style={styles.btn_container2}>
    //         <Text style={styles.txt_content_m2}>Get Started</Text>
    //       </TouchableOpacity>
    //     </View>
    //   </ImageBackground>

    // <View style={styles.container}>
    //   {/* Phần Header */}
      
    //   <View style={styles.header}>
    //     <Image
    //       source={{ uri: 'https://jpboxinggym.com/wp-content/uploads/2023/06/solo-female-traveller-bridge-1366x2048.jpg' }}
    //       style={styles.headerImage}/>
    //     {/* <TouchableOpacity style={styles.likeIcon} >
    //       <Image source={require('./assets/images/google.png')}/>
    //     </TouchableOpacity> */}
    //   </View>

    //   {/* Phần Body */}
      
    //   <View style={styles.body}>
    //     {/* Nội dung chi tiết chuyến đi */}
    //     <TouchableOpacity style={styles.likeIcon} >
    //       <Image source={require('./assets/images/google.png')}/>
    //     </TouchableOpacity>
    //     <Text>Quảng Nam</Text>
    //     <Text style={{marginTop:12, fontWeight:'bold'}}>Thông tin chuyến đi</Text>
    //     <Text numberOfLines={6} ellipsizeMode="tail" style={styles.tripInfo}>
    //       Höi An là m§t thanh phö truc thude tinh Quang Nam, Viet Nam. Phô co Höi An tung là möt thurong cang quôc te säm uät, göm nhüng di san kien trúc dä co tur häng träm nam truóc, duroc UNESCO cong nhan là di sán vän hãa the giói tù näm 1999.Höi An là mot thanh phö truc thuôc tinh Qung Nam, Vi@t Nam. Phö co Höi An türng
    //     </Text>
    //   </View>

    //   {/* Phần Footer */}
    //   <View style={styles.footer}>
    //     {/* Giá tiền và nút đặt */}
    //     <Text style={styles.price}>$100/Ngày</Text>
    //     <TouchableOpacity style={styles.bookButton}>
    //       <Text style={styles.bookButtonText}>Đặt ngay</Text>
    //     </TouchableOpacity>
    //   </View>
    // </View>
  );
};

export default App;
const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    color: 'green',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  // bai 3 lab5
  background2: {
    width: '100%',
    height: '100%',
  },
  content2: {
    // Phần nội dung của ứng dụng
    marginVertical: '80%'

  },
  txt_content2: {
    color: 'white',
    fontSize: 30,
    width: 280,
    fontWeight: '600',
    padding: 10,
    paddingStart: '20%',
    paddingBottom: 20,
  },
  txt_content_s2: {
    color: 'white',
    fontSize: 12,
    width: 360,
    fontWeight: '600',
    paddingBottom: 10,
    paddingStart: '20%',
  },
  txt_content_m2: {
    color: 'gray',
    fontSize: 10,
    width: 330,
    fontWeight: '800',
    padding: 11,
  },
  btn_container2: {
    backgroundColor: 'white',
    width: '22%',
    height: '18%',
    borderRadius: 5,
    justifyContent: 'center',
    marginHorizontal: '20%',
    marginTop: '5%',
    shadowRadius: 0.1,
    shadowOpacity: 0.1,
  },

  container: {
    flex: 1,
  },
  header: {
    flex: 7,
    position: 'relative',
  },
  headerImage: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
  },
  likeIcon: {
    position: 'absolute',
    right: 20,
    width:'10%'
    // Icon styles
  },
  body: {
    flex: 3,
    padding: 20,
    position: 'absolute',
    marginVertical:'130%',
    width:'100%',
    height:'40%',
    backgroundColor:'white',
    borderRadius:40,
    paddingTop:40,
  },
  tripInfo: {
    // Styles for trip information
    marginTop:20,
    fontSize:16,
    fontFamily:'Roboto-ThinItalic',
  },
  footer: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#0833AB', // Màu nền của Footer
    paddingHorizontal: 20,
    borderRadius:15,
  },
  price: {
    // Styles for price text
   color:'white',
   fontWeight:'bold'
  },
  bookButton: {
    // Styles for book button
    backgroundColor:'white',
    padding:10,
    width:110,
    borderRadius:10,  
   
  },
  bookButtonText: {
    // Styles for book button text
    marginHorizontal:'15%',
    
  },


});



