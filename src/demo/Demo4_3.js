import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const Demo4_3 = (props) => {
    const {onPress} = props; 
    
  return (
    <View>
      <Text>Demo4_3</Text>
      <Button
                title="Đúng"
                onPress={onPress}
            />
            <Button

                title="Sai"
                onPress={onPress}
            />
    </View>
  )
}

export default Demo4_3