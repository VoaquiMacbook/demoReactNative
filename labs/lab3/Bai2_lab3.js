import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import Bai3 from '../lab2/Bai3'
import Bai3_lab3 from './Bai3_lab3'
import Bai1_lab3 from './Bai1_lab3'
import Demo1 from '../../src/demo/Demo1'

const Bai2_lab3 = () => {
    const colorText = (color) => {
        return { color };    };
    const sizeText = (fontSize) => {
        return { fontSize };
    };
    const styleText = (styles) => {
        return styles;
    };
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const [showDemo1, setDemo1] = useState(true);
   
    
    return (
        <View >
             <View style={styles.btn_container}>
            <TouchableOpacity
            onPress={() => setDemo1(!showDemo1)}
            style={styles.btn}>
                <Text style={styles.btn_text}>➡️</Text>
                
            </TouchableOpacity>
            </View>   
            {
                showDemo1 ? <Bai1_lab3/> : <Bai3_lab3/>  
            }
        </View>

    )
}

export default Bai2_lab3
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
        width: 100, height: 50,
        justifyContent: 'center',
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
        fontSize: 40,
    },
})