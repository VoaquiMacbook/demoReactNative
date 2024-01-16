import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const Demo4 = () => {
    // khai báo 1 state
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Trần Văn An')
    // sự kiện nhấn nút
    const onPress = () => {
        console.log('onPress>>>>>>')
        setCount(count + 1)
    }
    console.log('Demo3 rendering...')
    const onPress2 = () => {
        setName('Nguyễn Văn B')
    }

    // biến bình thường
    let a = 1;
    const onPress3 = () => {
        console.log('onPress3>>>>>>')
        a = a + 1
    }
    
    return (
        <View>
            <Text
                style={{ fontSize: 40 }}
            >Count: {count}</Text>
            <Text
                style={{ fontSize: 40 }}
            >Name: {name}</Text>
            <Text
                style={{ fontSize: 40 }}
            >a: {a}</Text>
            <Button
                title="Tăng"
                onPress={onPress}
            />
            <Button
                title="Đổi tên"
                onPress={onPress2}
            />
            <Button
                title="Tăng a"
                onPress={onPress3}
            />
        </View>
    )
}

export default Demo4
// dữ liệu trong component
// 1. state: dữ liệu thay đổi trong component
