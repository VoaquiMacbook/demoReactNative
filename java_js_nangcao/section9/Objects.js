import { View, Text } from 'react-native'
import React from 'react'

const Objects = () => {
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

        order: function (starterIndex, mainIndex) {
            return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
        },

        orderDelivery: function ({ 
            starterIndex = 1, 
            mainIndex = 0, 
            time = '20:00', 
            address,}) {
            console.log('history Order >>>>>>>');
            console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
            will be received to ${address} at ${time}`);
            console.log('order end...');
        },
        

    };
   
    restaurant.orderDelivery({
        time: '22:30',
        address: ' Via del Sole, 21',
        mainIndex: 2,
        starterIndex: 2,
    });
    restaurant.orderDelivery({
        address: ' Via del Sole, 21',
        starterIndex:1,
    });

    


    const { name, openingHours, categories } = restaurant;
    console.log(name, openingHours, categories);

    const {
        name: restaurantName,
        openingHours: housr,
        categories: tags,
    } = restaurant;
    console.log(restaurantName, housr, tags);
    //default values >> gia tri mac dinh (them mang 0 vao Objects )
    const { menu = [], starterMenu: starter = [] } = restaurant;
    console.log(menu, starter);
    //mutating variables >> bien dot bien
    let a = 11;
    let b = 999;
    const obj = { a: 23, b: 7, c: 14 };
    ({ a, b } = obj);
    console.log(a, b);
    //nested object >> truy xuat long vao nhau
    const { fri: { open: o, close: c } } = openingHours;
    console.log(o, c);
    
    
    return (
        <View>
            <Text>Objects</Text>
        </View>
    )
}

export default Objects