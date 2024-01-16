import { View, Text } from 'react-native'
import React from 'react'
//props la mot oject chua cac thuoc tinh
//
// children la mot thuoc tinh dac biet cua props

const Demo3 = (props) => {
    const{children} = props
    return (
        <View>
            <Text>Demo2</Text>
            {children}
        </View>
    )
}

export default Demo3