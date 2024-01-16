import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Demo7 = () => {
    return (
        <View style={styles.container}>
            <View
                style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
                <View style={styles.view1}></View>
                <View style={styles.view2}></View>
            </View>
            <View
                style={{ alignItems: 'center' }}
            >
                <View style={styles.view3}></View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={styles.view4}></View>
                <View style={styles.view5}></View>
            </View>
        </View>
    )
}

export default Demo7

const styles = StyleSheet.create({
    container: {
        // flexDirection: 'row',
        flexDirection: 'column',
        justifyContent: 'space-between',
        // alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'green',
        padding: 20,
    },
    view1: { width: 50, height: 50, backgroundColor: 'red' },
    view2: { width: 50, height: 50, backgroundColor: 'blue' },
    view3: { width: 50, height: 50, backgroundColor: 'yellow' },
    view4: { width: 50, height: 50, backgroundColor: 'pink' },
    view5: { width: 50, height: 50, backgroundColor: 'black' },
    
})