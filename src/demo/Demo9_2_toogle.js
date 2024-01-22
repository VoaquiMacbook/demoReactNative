import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Demo_alert from './Demo9_alert'
import Demo9_1_modal from './Demo9_1_modal'
const Demo9_2_toogle = () => {
  const [showDemoAlert, setDemoAlert] = useState(true);
  return (
    <View>
      <View style={styles.btn_container}>
        <TouchableOpacity
          onPress={() => setDemoAlert(!showDemoAlert)}
          style={styles.btn}>
          <Text style={styles.btn_text}>➡️</Text>
        </TouchableOpacity>
      </View>
      {
        showDemoAlert ? <Demo_alert/> : <Demo9_1_modal/>
      }
    </View>
  )
}

export default Demo9_2_toogle
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
    padding: 15,
  },
  // custom button
  btn: {
    borderRadius: 20,
    width: 100, height: 50,
    justifyContent: 'center',
  },
  btn_container: {
    width: '100%',
    height: 50,
    alignItems: 'flex-end',
  },
  btn_text: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 40,
  },
})