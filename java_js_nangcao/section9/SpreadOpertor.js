import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const SpreadOpertor = () => {
    const restaurant = {
        name: 'Classico Italiano',
        location: 'Via Angelo Tavanti 23, Firenze, Italy',
        categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
        starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
        mainMenu: ['Pizza', 'Pasta', 'Risotto'],

        openingHours: {
            thu: {
                open: 12,
                close: 22,
            },
            fri: {
                open: 11,
                close: 23,
            },
            sat: {
                open: 0,
                close: 24,
            },
        },

        // order: function (starterIndex, mainIndex) {
        //     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
        // },

        // orderDelivery: function ({ 
        //     starterIndex = 1, 
        //     mainIndex = 0, 
        //     time = '20:00', 
        //     address,}) {
        //     console.log('history Order >>>>>>>');
        //     console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
        //     will be received to ${address} at ${time}`);
        //     console.log('order end...');
        // },
        orderPasta: function (ing1, ing2, ing3) {
            console.log(`Here is your declicious pasta with 
            ${ing1}, ${ing2}, ${ing3} `);
        }

    };

    // restaurant.orderDelivery({
    //     time: '22:30',
    //     address: ' Via del Sole, 21',
    //     mainIndex: 2,
    //     starterIndex: 2,
    // });
    // restaurant.orderDelivery({
    //     address: ' Via del Sole, 21',
    //     starterIndex:1,
    // });
    const arr = [7, 8, 9];
    const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
    // console.log(badNewArr);

    const newArr = [1, 2, ...arr];
    // console.log(...newArr);

    // console.log(...newArr);
    // console.log(1, 2, 3, 4, 5, 6, 7, 8);

    const newMenu = [...restaurant.mainMenu, 'Gnocci'];
    // console.log(newMenu);

    const menu = [restaurant.starterMenu, ...restaurant.mainMenu];
    // console.log(menu);

    const str = 'Jonas';
    const letters = [...str, '', 'S.'];
    // console.log(letters);

    const ingredients = [
       
    ];
    console.log(ingredients);




    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (text) => {
        setInputValue(text);
    };
    const handleLogInputValue = () => {
        console.log('Input value: ', inputValue);
    }
    return (
        <View>
            <Text>SpreadOpertor</Text>
            <TextInput
                placeholder='hello'
                id='ipInput'
                onChangeText={handleInputChange}
                style={style.ip}>
            </TextInput>
            <TouchableOpacity
            onPress={handleLogInputValue} 
            style={style.btn}>
                <Text style={{ color: 'black', textAlign:'center'  }}>run</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SpreadOpertor
const style = StyleSheet.create({
    ip: {
        backgroundColor: 'gray',
        width: '100%',
        height: 50,
    },
    btn: {
        borderRadius: 10,
        backgroundColor: 'green', 
        width: 100, height: 50,
        justifyContent: 'center'
    }

})
