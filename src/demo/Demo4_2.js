import { View, Text } from 'react-native'
import React from 'react'

const Demo4_2 = (props) => {
    const {message} = props;
  return (
    <View>
      <Text>Demo4_2</Text>
      <Text> {message} hello</Text>
    </View>
  )
}

export default Demo4_2