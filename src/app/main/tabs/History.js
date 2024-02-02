import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
const History = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
 <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30
      }}>
        <View>
          <TouchableOpacity onPress={() => { navigation.navigate('Setting') }}>
            <View>
              <Image
                style={{ position: 'relative' }}
                source={require('../../../assets/images/backgroudlogo.png')} />
              <Image
                style={{ position: 'absolute', top: 7, left: 8 }}
                source={require('../../../assets/images/logomenu.png')} />
            </View>
          </TouchableOpacity>
        </View>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: '600' }}>History</Text>
        <View>
          <TouchableOpacity onPress={() => { navigation.navigate('Personal') }}>
            <Image
              style={{ width: 30, height: 30, borderRadius: 10 }}
              source={require('../../../assets/images/ic_user.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default History

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0c0f14',
    width: '100%',
    height: '100%',
    padding: 30,
  }

})