import React from 'react';
import { View, StatusBar, ImageBackground, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Bai2_lab5 = () => {
    return (
        <View >
            <StatusBar translucent backgroundColor='rgba(0,0,0,0)' />
            <ImageBackground
                source={{ uri: 'https://jpboxinggym.com/wp-content/uploads/2023/06/solo-female-traveller-bridge-1366x2048.jpg' }}
                style={styles.backgroundImage}
                resizeMode="cover">
                {/* Nội dung của ứng dụng sẽ được đặt ở đây */}
                <View style={styles.content}>
                    {/* Nội dung ứng dụng */}
                    <Text style={styles.txt_content}>Discover world with us</Text>
                    <Text style={styles.txt_content_s}>
                        Lorem ipsum dolor sit amet, consectertur
                    </Text>
                    <Text style={styles.txt_content_s}>                   
                        adipiscing elit. Proin ut sem non erat vehicula
                    </Text>
                    <Text style={styles.txt_content_s}>
                        dignissim. Morbi eget congue ante, feugiat.
                    </Text>
                    <TouchableOpacity style={styles.btn_container}>
                        <Text style={styles.txt_content_m}>Get Started</Text>
                    </TouchableOpacity>

                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({

    backgroundImage: {
        width: '100%',
        height: '100%'
        // justifyContent: 'center', // Căn giữa theo chiều dọc
    },
    content: {
        // Phần nội dung của ứng dụng
        marginVertical: '70%'

    },
    txt_content: {
        color: 'white',
        fontSize: 30,
        width: 280,
        fontWeight: '600',
        padding: 10,
        paddingStart: '20%',
        paddingBottom:20,
    },
    txt_content_s: {
        color: 'white',
        fontSize: 12,
        width: 360,
        fontWeight: '600',
        paddingBottom:10,
        paddingStart: '20%',
    },
    txt_content_m: {
        color: 'gray',
        fontSize: 10,
        width: 330,
        fontWeight: '800',
        padding: 11,
    },
    btn_container: {
        backgroundColor: 'white',
        width: '20%',
        height: '18%',
        borderRadius: 5,
        justifyContent:'center',
        marginHorizontal:'20%',
        marginTop:'5%',
        shadowRadius:0.1,
        shadowOpacity:0.1,
    }
});

export default Bai2_lab5;
