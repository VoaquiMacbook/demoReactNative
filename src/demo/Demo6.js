import { View, Text, TextInput, StyleSheet,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const Demo6 = () => {
    const [name, setName] = useState('');
    const [isNameValue, setNameValue] = useState(true);
    const [isMessValue, setMessValue] = useState('');
const handSumbit =() =>{
    if(!name || name.length < 3){
        setNameValue(false);
        setMessValue('erro')
        return;
    }
    setNameValue(true);
    setMessValue(true);
    return;
}
    return (
        <View style={myDemo1Style.container}>
            <Text >Demo6</Text>
            <TextInput style={[myDemo1Style.input,
             myDemo1Style.margin, 
             !isNameValue && myDemo1Style.hl]}
                placeholder='Enter your name'
                keyboardType='default'
                secureTextEntry={true}
                value={name}
                
                onChangeText={text => setName(text)}
            />
            <TouchableOpacity 
            onPress={handSumbit}
                style={myDemo1Style.button}
            >

                <Text style={myDemo1Style.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Demo6
const myDemo1Style = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: 10,

    },
    margin:{
        marginTop:10,
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        height: 50,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: 'green',
        height: 50,
        width:'100%',
        borderRadius: 15,
        marginTop:5,
    },
    buttonText:{
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        lineHeight: 50,
        fontWeight:'bold',
    },
    hl:{
        borderWidth: 2,
        backgroundColor: 'red',
    },


})