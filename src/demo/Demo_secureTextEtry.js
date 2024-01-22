import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const Demo_secureTextEtry = () => {
    // state manage hidden
    const [securePassword, setSecurePassword] = useState(true);
    return (
        <View>
            <Text>Demo_secureTextEtry</Text>
            <View style={[styles.ip_input, styles.ip_color]}>
                <TextInput
                    placeholder='Password'
                    keyboardType='default'
                    secureTextEntry={securePassword}>
                </TextInput>
                <TouchableOpacity
                    onPress={() => setSecurePassword(!securePassword)} f
                    style={styles.ic_eye}>
                    {
                        securePassword ?
                            <Image source={require('../../assignment/assets/images/ic_eyeOpen.png')} />
                            :
                            <Image source={require('../../assignment/assets/images/ic_eyeLock.png')} />
                    }
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Demo_secureTextEtry
const styles = StyleSheet.create({
    // custom input
    ip_input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        height: '45%',
        backgroundColor: 'white'
    },
    ip_color: {
        color: 'gray',
        paddingStart: 10,
        paddingTop:'3%',
    },
    // custom eye
    ic_eye: {
        position: 'absolute',
        right: 15,
        top: 15,
        width: 30,
        height: 19,
    },

})