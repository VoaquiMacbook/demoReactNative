import React from 'react';
import { View, StyleSheet, Button, Alert } from 'react-native';

const Demo_alert = () => {

    const onCanel = () =>{

    }
    const onOk = () =>{
        
    }

    const createTwoButtonAlert = () =>
        Alert.alert('Alert Title', 'My Alert Msg', [
            {
                text: 'Cancel',
                onPress: onCanel,
                style: 'cancel',
            },
            { text: 'OK', onOk },
        ]);

    const createThreeButtonAlert = () =>
        Alert.alert('Alert Title', 'My Alert Msg', [
            {
                text: 'Ask me later',
                onPress: () => console.log('Ask me later pressed'),
            },
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);

    return (
        <View style={styles.container}>
            <Button title={'2-Button Alert'} onPress={createTwoButtonAlert} />
            <Button title={'3-Button Alert'} onPress={createThreeButtonAlert} />
        </View>
    );
};

export default Demo_alert;
const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        height: '50%',
    },
});