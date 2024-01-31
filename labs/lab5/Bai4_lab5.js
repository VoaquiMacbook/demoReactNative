import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const Bai4_lab5 = (props) => {
  const [securePassword, setSecurePassword] = useState(true)
  const { navigation } = props;
  const goBack = () => {
    // navigation.navigate('Bai1_lab6_PageChinh'); // goBack C1
    navigation.goBack();                           // goBack C2 
    //  goBack C3  chuyền thẳng  onPress={navigation.goBack}
  }
  return (
    <View>
      <ImageBackground source={{ uri: 'https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/423672434_1623061655101384_6595356168272493585_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=104&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=mos980koSWoAX8Hnz8G&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfC6jd_8JDIHXc9lhzt_zeGfNnEKjSJMdol_vGG7s1Z6_w&oe=65BB5E15' }}>

        <View
          style={[
            styles.container,
            {
              // Try setting `flexDirection` to `"row"`.
              flexDirection: 'column',
            },
          ]}>

          <View style={styles.header} >
            <View style={[styles.horizontal, { justifyContent: 'space-between' }]}>
              <Image style={[styles.img_icon]} source={require('../../assets/images/arrow_left.png')} />
              <Image style={styles.img_icon} source={require('../../assets/images/ic_bacham.png')} />
            </View>
          </View>

          <Text style={[styles.txt_name]}>PHỐ CỔ HỘI AN</Text>

          <View style={styles.body}>
            <View style={{ margin: '5%' }}>
              <View style={[styles.horizontal_quannam]}>
                <Image style={styles.ic_gps} source={require('../../assets/images/ic_gps.png')} />
                <Text style={[styles.img_color2,]}>Quảng Nam</Text>
              </View>
              <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Thông tin chuyến đi</Text>
              <Text numberOfLines={6} ellipsizeMode="tail" style={styles.tripInfo}>
                Hội An là một thành phố trực thuộc tỉnh Quảng Nam,
                Việt Nam. Phố cổ Hội An từng là một trung tâm cảng quốc
                tế sầm uất, gồm những di sản kiến trúc độc đáo từ hàng
                trăm năm trước, được UNESCO công nhận là di sản văn
                hóa thế giới từ năm 1999. Hội An là một thành phố trực
                thuộc tỉnh Quảng Nam, Việt Nam. Phố cổ Hội An từng...
              </Text>
            </View>
            <View style={[styles.footer]}>
              <View style={[styles.horizontal, { justifyContent: 'space-between' }]}>
                <Text style={styles.txt_rice_ft}>$100/ngày</Text>
                <TouchableOpacity style={styles.btn_ft}>
                  <Text style={styles.btn_txt_ft}>Đặt ngay</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.ic_sao}>
          <View style={styles.horizontal}>
            <Text style={styles.ic_txt_sao}>⭐️</Text>
            <Text style={styles.txt_sao}>5.0</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => setSecurePassword(!securePassword)}
          style={styles.ic_tim}>
          {
            securePassword ?
              <Text style={styles.ic_txt_tim} >🤍</Text>
              :
              <Text style={styles.ic_txt_tim} >❤️</Text>
          }
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
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
  // text
  txt_color: {
    color: 'white',
    margin: '5%',
  },
  txt_color2: {
    color: 'black',
  },
  img_icon: {
    tintColor: 'white',
    margin: '5%',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 20,
  },
  // custom quangNam
  img_color2: {
    color: '#154E9B',
    fontWeight: 'bold',
    marginStart: '2%',
    fontSize: 18,
    marginVertical: '1%',
  },
  horizontal_quannam: {
    flexDirection: 'row',
    marginVertical: '5%',
  },
  ic_gps: {
    width: 22,
    height: 26
  },
  txt_name: {
    color: 'white',
    margin: '4%',
    fontSize: 26,
    fontWeight: '700',
  },

  header: {
    flex: 3,
    // height: '47%'
  },
  // custom body
  body: {
    flex: 3.1,
    backgroundColor: 'white',
    borderStartEndRadius: 40,
    borderTopLeftRadius: 40,
  },
  // custom footer
  footer: {
    borderStartEndRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: '#154E9B',
    height: 80,
    width: '100%',
    bottom: 0,
    position: 'absolute',
    padding: '4%',
  },
  tripInfo: {
    // Styles for trip information
    marginTop: 20,
    fontSize: 16,
    fontFamily: 'Roboto-ThinItalic',
    lineHeight: 26,
  },
  // custom icon tim
  ic_tim: {
    width: '18%',
    height: '9%',
    borderRadius: 50,
    position: 'absolute',
    marginHorizontal: 330,
    marginVertical: 390,
    backgroundColor: 'white',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowColor: '1px 2px 9px #F4AAB9',
  },
  ic_sao: {
    width: '10%',
    height: '6%',
    position: 'absolute',
    marginHorizontal: 330,
    marginVertical: 350,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowColor: '1px 2px 9px #F4AAB9',

  },
  ic_txt_sao: {
    alignSelf: 'center',
    marginVertical: '26%',
    fontSize: 18,
    shadowOpacity: 1,
    shadowRadius: 20,
  },
  txt_sao:{
    alignSelf: 'center',
    marginVertical: '26%',
    fontSize: 18,
    shadowOpacity: 1,
    shadowRadius: 20,
    color:'white',
    fontWeight:'700'
  },
  ic_txt_tim: {
    alignSelf: 'center',
    marginVertical: '20%',
    fontSize: 40,
  },
  // custom footer
  btn_ft: {
    backgroundColor: 'white',
    width: '35%',
    height: '130%',
    borderRadius: 10,
    justifyContent: 'center',
  },
  btn_txt_ft: {
    alignSelf: 'center',
    fontWeight: '600',
  },
  txt_rice_ft: {
    color: 'white',
    fontWeight: '900',
  }
});

export default Bai4_lab5;