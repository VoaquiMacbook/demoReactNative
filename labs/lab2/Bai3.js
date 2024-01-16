import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'

const Bai3 = () => {
    // const firtPromise = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve('foo');
    //         console.log('firtPromise 1');
    //     }, 2000);
    // });
    // const secondPromise = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         reject('foo');
    //         console.log('Error: some bug');
    //     }, 2000);
    // });

    
    const getList = async () => {
        try {
            // Yêu cầu 1: Sử dụng Promise.all để chờ cả hai promise hoàn thành.
            const resultAll = await Promise.all([firtPromise, secondPromise]);
            console.log('Promise.all Completed:', resultAll);
        } catch (error) {
            console.error('Promise.all Error:', error);
        }
    
        try {
            // Yêu cầu 2: Sử dụng Promise.allSettled để chờ cả hai promise kết thúc, bao gồm cả promise bị reject.
            const resultAllSettled = await Promise.allSettled([firtPromise, secondPromise]);
            console.log('Promise.allSettled Completed:', resultAllSettled);
        } catch (error) {
            console.error('Promise.allSettled Error:', error);
        } finally {
            console.log('Finally block');
        }
    };
    const onPress1 = () => {
        getList();
    
    }



    return (
        <View>
            <Text>Bai3</Text>
            <Button 
            title='start'
            color='green'
            onPress={onPress1}           
            />

        </View>
    )
}

export default Bai3
const btnStart = StyleSheet.create({
    btn: {
        backgroundColor: 'green'
    }
})