import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
const Demo3 = () => {
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
    let cauThuBanThangLonNhat = null;
    let banThangLonNhat = 0;
    for (let index = 0; index < players.length; index++) {
        const element = players[index];
        if (element == undefined ||
            element.name == undefined ||
            element.goals == undefined ||
            element.goals == null) {
            continue;
        }
        if (element.goals > banThangLonNhat) {
            banThangLonNhat = element.goals;
            cauThuBanThangLonNhat = element;
        }
        cauThu.push(element);

    }

    console.log(cauThu);
    return (
        <View>
            <View>
                <Text>
                    Danh sách cầu thủ
                </Text>
                {
                    cauThu.map((player, index) => {
                        return (

                            <Text key={index}>{player.name}{player.goals}</Text>

                        )
                    })
                }
            </View>
            <View>
                <Text>
                    Cầu thủ top 1
                </Text>
                {
                    cauThuBanThangLonNhat && (
                        <Text style={myDemo2Style.welcome}>
                            {cauThuBanThangLonNhat.name} là cầu thủ ghi bàn nhiều nhất với {cauThuBanThangLonNhat.goals} bàn.
                        </Text>
                    )
                }


            </View>

        </View>
    )
}

export default Demo3

const myDemo1Style = StyleSheet.create({
    welcome: {
        fontSize: 20,
        color: 'red',
        fontWeight: 'bold'
    }
})
const myDemo2Style = StyleSheet.create({
    welcome: {
        fontSize: 18,
        color: 'green',
        fontWeight: 'bold'
    }
})