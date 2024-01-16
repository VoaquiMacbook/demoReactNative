import { View, Text } from 'react-native'
import React from 'react'

const Arrays = () => {
  const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function (starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
  };


  // const arr = [2, 3, 4];
  // const a = arr[0]
  // const b = arr[1]
  // const c = arr[2]
  // console.log(arr);

  // const [x,y,z] = arr;
  // console.log(x);
  // console.log(arr);

  // const[first, second] = restaurant.categories;
  // console.log(first,second);

  // console.log(restaurant.order(2, 0));
  // const [starter, mainCourse] = restaurant.order(2, 0);
  // console.log(starter, mainCourse);
  
  // const nested = [2,4,[5,6]];
  // const [i, j] = nested;
  // console.log(i,j);

  // const [i,,[j,k]] = nested;
  // console.log(i, j, k);

  // const [p= 1, q=1, r=1] = [8,9];
  // console.log(p,q,r);
  return (
    <View>
      <Text>Arrays</Text>
    </View>
  )
}

export default Arrays