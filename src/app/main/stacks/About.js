// About.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chào mừng đến với Góc Cà Phê!</Text>
      <Text style={styles.text}>Tại Coffee Shop, chúng tôi đam mê phục vụ cà phê ngon nhất cho khách hàng. Quán cà phê ấm cúng của chúng tôi mang đến bầu không khí thư giãn, nơi bạn có thể thưởng thức các loại bia yêu thích và bánh ngọt thơm ngon.</Text>
      <Text style={styles.text}>Để được tư vấn và đặt chỗ, vui lòng liên hệ với chúng tôi:</Text>
      <Text style={styles.contact}>Phone: 09933 899 233</Text>
      <Text style={styles.contact}>Email: quivo2002@gmail.com</Text>
      <Text style={styles.contact}>Phố cà phê 123, Cityville</Text>
      <Text style={styles.text}>Rất mong được chào đón bạn tại Coffee Shop!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  contact: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default About;
