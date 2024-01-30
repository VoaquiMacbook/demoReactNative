import {
    StyleSheet, Text, View, Image, TextInput,
    TouchableOpacity
} from 'react-native'
import React, { useState, useContext } from 'react'
import { AppContext } from '../AppContext'
import Asm1_2 from '../../../assignment/Asm1_login_2';
import Asm1_3 from '../../../assignment/Asm1_login_4';


const Login = (props) => {
    const {navigation} = props;
    const { setIsLogin } = useContext(AppContext)
    // // quản lý ẩn hiện password
    // const [securePassword, setSecurePassword] = useState(true)

    const [name, setName] = useState('');
    // state quản lý bắt lỗi
    const [isNameValid, setIsNamevalid] = useState(true);
    const [messenger, setMessenger] = useState('')
    const handleOnSubmit = () => {
        if (!name || name.length < 3) {
            setIsNamevalid(false);
            setMessenger('Password is not true. Try Again!')
            return;
        }
        setIsNamevalid(true);
        setMessenger('')

        return  setIsLogin(true);
    }
    
    // state manage hidden
    const [securePassword, setSecurePassword] = useState(true);
    return (
        <View style={asmStyle.containerAll}>
            <View style={[asmStyle.container]}>
                {/* <Text style={asmStyle.txt_color}>Asm1_1</Text> */}
                <View style={{ alignItems: 'center' }}>
                    <Image style={asmStyle.img} source={require('../../assets/images/img_logo.png')}>
                    </Image>
                    <View style={asmStyle.txt_container}>
                        <Text style={[asmStyle.txt_color,
                        asmStyle.txt_blob,
                        asmStyle.txt_size]}>
                            Wellcome to Lungo !!</Text>
                    </View>
                    <View style={asmStyle.txt_container_s}>
                        <Text
                            style={[asmStyle.txt_color_s,
                            asmStyle.txt_blob_s,
                            asmStyle.txt_size_s]}>
                            Login to Continue</Text>
                    </View>
                </View>
            </View>
            <View style={asmStyle.container02}>
                {/* <Text style={asmStyle.txt_color}>Asm1_2</Text> */}
                <View>
                    <TextInput
                        placeholder=' Emall Address'
                        keyboardType='email-address'
                        style={[asmStyle.ip_input02, asmStyle.ip_color02]}>
                    </TextInput>
                </View>
                <View style={{ marginTop: 20 }}>
                    <TextInput
                        placeholder='Password'
                        keyboardType='default'
                        secureTextEntry={securePassword}
                        style={[asmStyle.ip_input02, asmStyle.ip_color02,
                        !isNameValid && asmStyle.error02]}
                        value={name}
                        onChangeText={text => setName(text)}>
                    </TextInput>
                    <TouchableOpacity
                        onPress={() => setSecurePassword(!securePassword)} f
                        style={asmStyle.ic_eye02}>
                        {
                            securePassword ?
                                <Image source={require('../../assets/images/ic_eyeOpen.png')} />
                                :
                                <Image source={require('../../assets/images/ic_eyeLock.png')} />
                        }
                    </TouchableOpacity>
                </View>

                {!isNameValid && <Text style={{ color: 'red' }}>{messenger}</Text>}

                <View style={{ marginTop: 15 }}>
                    <View style={{ marginTop: 10 }}>
                        <TouchableOpacity
                            onPress={handleOnSubmit}
                            style={asmStyle.btn_container02}>
                            <Text style={asmStyle.btn_text02}> Sign in</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <TouchableOpacity
                        
                            style={asmStyle.btn_container_2_02}>
                            <View style={asmStyle.btn_row02}>
                                <View>
                                    <Image style={asmStyle.img02} source={require('../../assets/images/google.png')}></Image>
                                </View>
                                <View style={asmStyle.textColumn02}>
                                    <Text style={asmStyle.btn_text_2_02}> Sign In with Google</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
            <View style={{marginTop: '15%'}}>
            {/* <Text style={asmStyle.txt_color}>Asm1_login_4</Text> */}
            <View style={{ flexDirection: 'column' }}>
                <View style={[asmStyle.row03, asmStyle.row_center03]}>
                    <Text style={[asmStyle.txt_color_gray03]}>Don't have account? Click </Text>
                    <Text onPress={() => navigation.navigate('Register')} style={[asmStyle.txt_color_register03]}>Register</Text>
                </View>
                <View style={[asmStyle.row03, asmStyle.row_center03, asmStyle.row_mgtop03]}>
                    <Text style={[asmStyle.txt_color_gray03]}>Forget Password? Click </Text>
                    <Text style={[asmStyle.txt_color_register03]}>Reset</Text>
                </View>
            </View>
        </View>

        </View>
    )
}
export default Login
const asmStyle = StyleSheet.create({
    containerAll: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        padding:26,
      },
    container: {
        flexDirection: 'column',
    },
    // custom img
    img: {
        width: 100,
        height: 100,
        marginTop: 20,
    },
    // custom text
    txt_color: {
        color: 'white'
    },
    txt_blob: {
        fontWeight: 'bold'
    },
    txt_size: {
        fontSize: 20,
    },
    txt_container: {
        marginTop: 25,
    },
    // custom text s
    txt_color_s: {
        color: 'gray',
    },
    txt_blob_s: {
        fontWeight: 'bold'
    },
    txt_size_s: {
        fontSize: 15,
    },
    txt_container_s: {
        marginTop: 20,
        marginBottom: 25,

    },
    // custom text
    txt_color02: {
        color: 'white'
    },
    // custom input
    ip_input02: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        height: 50,
        backgroundColor: 'white'
    },
    ip_color02: {
        color: 'gray',
        paddingStart: 10,
    },
    // demo
    error02: {
        borderWidth: 2,
        borderColor: 'red',
    },

    // custom touchableOpacity 
    btn_container02: {
        flexDirection: 'column',
        backgroundColor: '#FA7C0F',
        width: '100%',
        height: 50,
        borderRadius: 26,
        marginTop: '5%',
    },
    btn_text02: {
        textAlign: 'center',
        lineHeight: 53,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17,

    },
    // custom touchableOpacity 2
    btn_container_2_02: {
        backgroundColor: '#FFFFFF',
        width: '100%',
        height: 55,
        borderRadius: 26,
    },
    btn_text_2_02: {
        lineHeight: 50,
        color: 'black',
        fontSize: 14,
        paddingStart: '25%',
        fontWeight: '500',

    },
    btn_row02: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textColumn02: {
        flex: 1, // Để text chiếm phần còn lại của dòng
    },
    // custom img
    img02: {
        padding: 10,
        marginStart: 24,
        width: 20,
        height: 20,
    },
    // custom eye
    ic_eye02: {
        position: 'absolute',
        right: 15,
        top: 15,
        width: 30,
        height: 19,
    },
      // custom text
      txt_color03: {
        color: 'white',

    },
    txt_color_register03: {
        color: '#FA7C0F',
        fontWeight: 'bold'
    },
    txt_color_gray03: {
        color: 'gray',
        fontWeight: 'bold',
        fontSize: 15,

    },
    // custom row
    row03: {
        flexDirection: 'row',
    },
    row_flex03: {
        flex: 1, // Để text chiếm phần còn lại của dòng
    },
    row_center03: {
        justifyContent: 'center'
    },
    row_mgtop03:{
        marginTop: 20,
    }
})