import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import Demo1 from '../../src/demo/Demo1'
import Bai3_lab3 from './Bai3_lab3'

const Bai1_lab3 = () => {
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
        <View >
           
            
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
            
            <View style={styles.container}>
                <Text style={styles.baseText}>Em vào đời bằng{' '}
                    <Text style={[styles.boldText, colorText('red')]}>vang đỏ {''}</Text>
                    anh vào đời bằng{' '}
                    <Text style={[styles.italicText, colorText('yellow')]}> nước trà</Text>
                </Text>
                <Text style={[styles.baseText]}>Bằng cơn mưa thơm{' '}
                    <Text style={[styles.boldText, colorText('white'), sizeText(18)]}>mùi đất {''}</Text>
                    <Text style={{ fontSize: 15 }}>và </Text>
                    <Text style={{ fontSize: 10 }}>bằng hoa dại mọc trước nhà</Text>
                </Text>
                <Text style={[styles.baseText, colorText('gray')]}>Em vào đời bằng kế hoạch anh vào đời bằng mộng mơ</Text>
                <Text style={styles.baseText}>
                    Lý trí em là{' '}
                    <Text style={styleText({
                        textDecorationLine: 'underline',
                        letterSpacing: 20,
                        fontWeight: 'bold',
                    })}> công cụ {''}</Text>
                </Text>
                <Text style={styles.baseText}>
                    còn trái tim anh là{' '}
                    <Text style={styleText({
                        textDecorationLine: 'underline',
                        letterSpacing: 20,
                        fontWeight: 'bold',
                    })}> động cơ {''}</Text>
                </Text>
                <Text style={[styles.baseText,
                colorText('white'),
                styleText({ textAlign: 'right' })]}>
                    Em vào đời bằng đồng nghiệp anh vào đời nhiều thân tình
                </Text>
                <Text style={[styles.baseText,
                colorText('orange'),
                styleText({ textAlign: 'center', fontWeight: 'bold' })]}>
                    Anh chỉ muốn chân mình dập đất không muốn đạp ai dưới chân mình
                </Text>
                <Text style={[styles.baseText,
                colorText('black'),
                styleText({ fontWeight: 'bold' })]}>Em vào đời bằng{' '}
                    <Text style={[styles.boldText, colorText('white')]}>mây trắng {''}</Text>
                    em vào đời bằng{' '}
                    <Text style={[styles.italicText, colorText('yellow')]}> nắng xanh</Text>
                </Text>
                <Text style={[styles.baseText,
                colorText('black'),
                styleText({ fontWeight: 'bold' })]}>Em vào đời bằng{' '}
                    <Text style={[styles.boldText, colorText('yellow')]}>đại lộ {''}</Text>
                    và con đường đó giờ{' '}
                    <Text style={[styles.italicText, colorText('white')]}> vắng anh</Text>
                </Text>
            </View>

        </View>

    )
}

export default Bai1_lab3
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        width: '90%',
        alignSelf: 'center',
        marginTop: 20,
        padding: 15,
    },
    baseText: {
        fontFamily: 'Cochin',
        color: 'white',
        fontSize: 18,
        marginTop: 10,
    },
    boldText: {
        fontWeight: 'bold',
    },
    italicText: {
        fontWeight: 'bold',
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