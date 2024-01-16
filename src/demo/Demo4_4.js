import { View, Text } from 'react-native'
import React from 'react'

const Demo4_4 = (props) => {
    const {so1, so2, result} = props;

  return (
    <View>
      <Text>Demo4_4</Text>
      <Text
                style={{ fontSize: 40 }}
            >{so1} + {so2}</Text>
            <Text
                style={{ fontSize: 40 }}
            >=</Text>
            <Text
                style={{ fontSize: 40 }}
            >{result}</Text>
    </View>
  )
}

export default Demo4_4