import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const Bai1 = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.baseText}> Em vào đời bằng{' '}
                <Text style={[styles.boldText, colorText('red')]}>vang đỏ {''}</Text>
                anh vào đời bằng{' '}
                <Text style={styles.italicText}> nước trà</Text>
            </Text>

        </View>
    )
}

export default Bai1
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
        fontSize: 16,
        marginTop: 10,
    },
    boldText: {
        fontWeight: 'bold',
    },
    italicText: {
        fontWeight: 'italic',
    }

})