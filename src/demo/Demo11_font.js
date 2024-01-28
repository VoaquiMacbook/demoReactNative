import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Demo11_font = (props) => {
  
  return (
    <View>
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
    </View>
  )
}

export default Demo11_font

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    color: 'green',
    fontWeight: 'bold',
    textAlign: 'center'
  }
})