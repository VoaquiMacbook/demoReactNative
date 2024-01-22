import {
    StyleSheet, Text, View, Image, TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native'
import React, { useState } from 'react'


const Lab4_bai3 = () => {
    const [securePass,setSecurePass]= useState(true);
    const [name, setName] = useState('');
// state quản lý bắt lỗi
const [isNameValid, setIsNameValid] = useState(true);

const handleOnSubmit = () => {
    if (!name || name.length < 3) {
        setIsNameValid(false);
        return;
    }
    setIsNameValid(true);
    return;
}
    return (

        <KeyboardAvoidingView>
            <ScrollView>
        <View style={styles.container}>
             <View style={styles.welcomeContainer}>
                <Text style={styles.welcome}>Hi WELCOME BACK ! </Text>
            </View>
            <View style={styles.loginContainer}>
                <Text style={styles.login}>HeLlo again you have been misstake </Text>
            </View>
            <View>
                <Image
                    style={styles.logo}
                    source={require('../lab4/assets/images/img_avt.png')} />
            </View>
          
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                />
            </View>
            <View style={[styles.inputContainer, styles.password]}>
                <TextInput
                    style={[styles.input, !isNameValid && styles.highlight]}
                    placeholder='Password'
                    secureTextEntry={securePass}
                    value={name}
                    onChangeText={text => setName(text)}
                />
                <TouchableOpacity
                 onPress={()=> setSecurePass(!securePass)}
                style={styles.eyeIcon}>
                <Image
                   source={require('../lab4/assets/images/ic_help.png')}
                    // source={require('../assets/eye.png')}
                    
                /></TouchableOpacity>
                 {!isNameValid && (
                    <Text style={styles.errorText}>Password is not true. Try Again!</Text>
                )}
            </View>
            <View>
                <Text>
        -------------- or Login with ----------------
                </Text>
            </View>
            <View style={styles.buttonGGContainer}>
                <TouchableOpacity style={styles.buttonGG}  onPress={handleOnSubmit}>
                    <Image
                        style={styles.ggImage}
                        source={require('../lab4/assets/images/google.png')}
                    />
                    <Text style={styles.buttonGGLabel}> Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonGG}  onPress={handleOnSubmit}>
                    <Image
                        style={styles.ggImage}
                        source={require('../lab4/assets/images/ic_help.png')}
                    />
                    <Text style={styles.buttonGGLabel}>Google</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.loginContainer1}>
                <Text style={styles.login}>Don’t have account? <Text style={{ color: 'purple', }}>Register</Text> </Text>
            </View>
          
        </View>
        </ScrollView>
        </KeyboardAvoidingView>
    )
}
export default Lab4_bai3
const styles = StyleSheet.create({
    highlight: {
        borderWidth: 2,
        borderColor: 'red',
    },
    ggImage: {
        position: 'absolute',
        left: 25,
        top: 19,
    },
    buttonGGLabel: {
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 26,
        letterSpacing: 0.5,
        color: '#121212',
    
    },
    buttonGG: {
        width: 150,
        height: 57,
        backgroundColor: '#fff',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth:1,
        marginLeft:10,
        
        
    },
    buttonGGContainer: {
        width: '100%',
        marginTop: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
       
    },
    buttonLabel: {
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 26,
        letterSpacing: 0.5,
        color: '#fff',
    },
    button: {
        width: '100%',
        height: 57,
        backgroundColor: '#d17842',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        width: '100%',
        marginTop: 41
    },
    eyeIcon: {
        position: 'absolute',
        right: 17,
        top: 15,
    },
    password: {
        marginTop: 16,
        marginBottom:30,
    },
    input: {
        width: '100%',
        height: 48,
        borderWidth: 1,
        borderColor: '#252a32',
        borderRadius: 8,
        backgroundColor: '#fff',
        paddingVertical: 11,
        paddingHorizontal: 17,
    },
    inputContainer: {
        width: '100%',
        marginTop: 31,
    },
    login: {
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 26,
        letterSpacing: 0.5,
        color: '#828282',
    },
    loginContainer: {
        marginTop: 16,
        right: 60,
        
    },
    loginContainer1: {
        marginTop: 16,
        
        
    },
    welcomeContainer: {
        top: 20,
        right: 70,
       
        
    },
    welcome: {
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 26,
        letterSpacing: 0.5,
        color: '#000',
    },
    logo: {
        width: 300,
        height: 200,
        marginTop:50,
        marginBottom:50,
    },
    errorText: {
        color: '#FB7181',
        fontSize: 14,
        
    },
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 17
    }
})