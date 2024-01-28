import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const Bai4_lab5 = () => {
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
              <Text style={[styles.txt_color,]}>❤️</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.ic_tim}>
          <Text style={styles.ic_txt_tim} >❤️</Text>
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
  },
  img_icon: {
    tintColor: 'white',
    margin: '5%',
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
    fontSize: 30,
    fontWeight: 'bold',
  },

  header: {
    flex: 3,
  },
  // custom body
  body: {
    flex: 3,
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
    borderRadius:50,
    position: 'absolute',
    marginHorizontal: 330,
    marginVertical: 410,
    backgroundColor: 'white',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowColor: '1px 2px 9px #F4AAB9',
  },
  ic_txt_tim:{
    alignSelf:'center',
    marginVertical:'20%',
    fontSize:40,
  }
});

export default Bai4_lab5;