import {
    StyleSheet, Text, View, Image, TextInput,
    TouchableOpacity
} from 'react-native'
import React, { useState, useContext } from 'react'
import { AppContext } from '../AppContext'

const Login = () => {
    const { setIsLogin } = useContext(AppContext)
    // quản lý ẩn hiện password
    const [securePassword, setSecurePassword] = useState(true)
    return (
        <View style={styles.container}>
            <View>
                <Image
                    style={styles.logo}
                    source={require('../../../assets/images/google.png')} />
            </View>
            <View style={styles.welcomeContainer}>
                <Text style={styles.welcome}>Welcome to Lungo!!</Text>
            </View>
            <View style={styles.loginContainer}>
                <Text style={styles.login}>Login to Continue</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                />
            </View>
            <View style={[styles.inputContainer, styles.password]}>
                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    secureTextEntry={securePassword}
                />
                <TouchableOpacity
                    onPress={() => setSecurePassword(!securePassword)}
                    style={styles.eyeIcon}
                >
                    {
                        securePassword ?
                            <Image
                                source={require('../../../assets/images/google.png')}
                            />
                            :
                            <Image
                                source={require('../../../assets/images/google.png')}
                            />
                    }
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => setIsLogin(true)}
                    style={styles.button}>
                    <Text style={styles.buttonLabel}>Sign In</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonGGContainer}>
                <TouchableOpacity style={styles.buttonGG}>
                    <Image
                        style={styles.ggImage}
                        source={require('../../../assets/images/google.png')}
                    />
                    <Text style={styles.buttonGGLabel}>Sign In With Google</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Login
const styles = StyleSheet.create({
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
        width: '100%',
        height: 57,
        backgroundColor: '#fff',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonGGContainer: {
        width: '100%',
        marginTop: 16
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
    },
    welcomeContainer: {
        marginTop: 80,
    },
    welcome: {
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 26,
        letterSpacing: 0.5,
        color: '#fff',
    },
    logo: {
        width: 93,
        height: 78,
    },
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 17
    }
})