import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import Demo1 from '../../src/demo/Demo1'


const Bai1_lab6 = (prpos) => {
    const colorText = (color) => {
        return { color };
    };
    const sizeText = (fontSize) => {
        return { fontSize };
    };
    const styleText = (styles) => {
        return styles;
    };
    

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const [finalResult, setFinalResult] = useState('');
    const [finalPhone, setFinalPhone] = useState('');
    const [finalPassword, setFinalPassword] = useState('');

    const handleInputChange = (text, inputType) => {
        switch (inputType) {
            case 'name':
                setName(text);
                break;
            case 'phone':
                setPhone(text);
                break;
            case 'password':
                setPassword(text);
                break;
            default:
                break;
        }
    };
    const handleLogInputValue = () => {
        if (!/^\d+$/.test(phone)) {
            // Kiểm tra nếu số điện thoại không phải là số
            alert('Số điện thoại phải là số!');
            return; // Dừng hàm nếu có lỗi
        }
        setFinalResult(`Họ và tên: ${name}`);
        setFinalPhone(`Số điện thoại: ${phone}`);
        setFinalPassword(`Mật khẩu: ${password}`);

        // Xóa dữ liệu trong các TextInput
        setName('');
        setPhone('');
        setPassword('');

        

    }
    const [showDemo1, setDemo1] = useState(false);
    return (
        <View style={styles.container}>
            <Text style={styles.txt_titile}>Chào bạn, đay là màn hình chính</Text>
            <TextInput
                placeholder='Nhập họ tên'
                id='ip_name'
                onChangeText={(text) => handleInputChange(text, 'name')}
                value={name}
                style={styles.ip}>
            </TextInput>
            <TextInput
                placeholder='Nhập số điện thoại'
                id='ip_sdt'
                onChangeText={(text) => handleInputChange(text, 'phone')}
                keyboardType='phone-pad'
                value={phone}
                style={styles.ip}>
            </TextInput>
            <TextInput
                placeholder='Nhập mật khẩu'
                id='ip_pw'
                onChangeText={(text) => handleInputChange(text, 'password')}
                secureTextEntry={true}
                value={password} 
                style={styles.ip}>
            </TextInput>
            <View style={styles.btn_container}>
            <TouchableOpacity
                onPress={handleLogInputValue} 
                style={styles.btn}>
                <Text style={styles.btn_text}>Save</Text>
            </TouchableOpacity>
            </View>
            {/* <Text>Tên: {name}</Text>
            <Text>Phone: {phone}</Text> */}
            <Text>{finalResult}</Text>
            <Text>{finalPhone}</Text>
            <Text>{finalPassword}</Text>
            
            

        </View>

    )
}

export default Bai1_lab6
const styles = StyleSheet.create({
    container:{
       width:'100%',
       height:'100%',
       paddingVertical:'50%'
    },
    txt_titile:{
        alignSelf:'center',
        fontSize:20,
        fontWeight:'800',
        color:'#154E9B',
    },


    // custom textInput
    ip: {
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'gray',
        marginTop: 10,
        marginHorizontal: 15,
        paddingStart: 10,
    },
    // custom button
    btn: {
        borderRadius: 20,
        backgroundColor: 'green', 
        width: 100, height: 40,
        justifyContent: 'center',
        marginEnd: 10,
        margin: 10,
    },
    btn_container: {
        width: '100%',
        height: 50,
        alignItems: 'flex-end',
    },
    btn_text: { 
        color: 'white', 
        textAlign:'center',
        fontWeight: 'bold',
    },

})