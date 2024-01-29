import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Bai1_lab5 = () => {
    return (
        <View style={{ margin: '5%' }}>
            <Text style={styles.txt_font}>
                React Native là các doan code đã được viết sẵn (framework) do công ty công nghệ
                Facebook phát triển. Các lập trình viên React Native là người sử dụng nhüng framework này để phát trién nên các hệ thống, nền tảng ứng dụng 
                trên các hê diều hành như IOS và Android. Ngôn ngữ lập trình được sử dụng nhiều nhất là Javascript.
            </Text>
            <Text style={styles.txt_font_2}>
                React Native là các doan code đã được viết sẵn (framework) do công ty công nghệ
                Facebook phát triển. Các lập trình viên React Native là người sử dụng nhüng framework này để phát trién nên các hệ thống, nền tảng ứng dụng 
                trên các hê diều hành như IOS và Android. Ngôn ngữ lập trình được sử dụng nhiều nhất là Javascript.
            </Text>
        </View>
    )
}

export default Bai1_lab5

const styles = StyleSheet.create({
// custom font
txt_font:{
    fontSize:16,
    fontFamily:'PlaypenSans-Medium',
    color:'black',
    padding:10,
},
txt_font_2:{
    fontSize:16,
    fontFamily:'Roboto-ThinItalic',
    padding:10,
}
})