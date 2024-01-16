import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
const Demo1 = () => {
    const name = 'nguyen van a'
    const players = [
        { name: 'Voaqui', goals: 30 },
        { name: 'Messi', goals: undefined },
        { name: 'Ronaldo', goals: 29 },
        { goals: 28 },
        { name: 'Neymar', goals: 22 },
        { name: 'Mbappé', goals: 25 },
        { name: 'Pele', goals: null },
    ];
    let cauThu = [];
    for(let index = 0; index < players.length; index++){
        const element = players[index];
        if(element == undefined || 
            element.name == undefined ||
            element.goals == undefined ||
            element.goals == null){
                continue;
            }
            cauThu.push(element);
    }


console.log(cauThu);


    return (
        <View>
            <View>
                <View>
                    <Text style={myDemo1Style.welcome}>xin chao 0 {name} </Text>
                </View>
                <View>
                    <Text>xin chao 1 {name} </Text>
                </View>
                <View>
                    <Text>xin chao 2 {name} </Text>
                </View>
                <View>
                    <Text>xin chao 3 {name} </Text>
                </View>
            </View>
            {
                players.map((player, index) => {
                    return (
                        <Text key={index}>{player.name}{player.goals}</Text>

                    )
                })
            }
        </View>
    )
}

export default Demo1

const myDemo1Style = StyleSheet.create({
    welcome: {
        fontSize: 20,
        color: 'red',
        fontWeight: 'bold'
    }
})