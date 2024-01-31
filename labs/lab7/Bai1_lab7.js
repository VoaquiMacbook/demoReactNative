import { StyleSheet, Text, View, Button, Image } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/FontAwesome';
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
function PaymentScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Payment!</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
function HistoryScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>history!</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
const Tab = createBottomTabNavigator();

const Bai1_lab7 = (props) => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: {
            height: 60,
            backgroundColor: '#31374A',
            borderRadius: 28,
            marginBottom: 10,
            marginStart: '3%',
            marginEnd: '3%',
            padding:10,
            paddingBottom:'2%',
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = focused;
            if (route.name == 'Home') {
              if (iconName) {
                return <Image style={styles.ic_bottom} source={require('../../assets/images/ic_home.png')}/>
              }
              return <Image style={{ tintColor: 'gray' }} source={require('../../assets/images/ic_home.png')} />
            }
            if (route.name == 'Settings') {
              if (iconName) {
                return <Image style={styles.ic_bottom} source={require('../../assets/images/ic_payment.png')} />
              }
              return <Image style={{ tintColor: 'gray' }} source={require('../../assets/images/ic_payment.png')} />
            }
            if (route.name == 'payment') {
              if (iconName) {
                return <Image style={styles.ic_bottom} source={require('../../assets/images/ic_logout.png')} />
              }
              return <Image style={{ tintColor: 'gray' }} source={require('../../assets/images/ic_logout.png')} />
            }
            if (route.name == 'history') {
              if (iconName) {
                return <Image style={styles.ic_bottom} source={require('../../assets/images/ic_payment.png')} />
              }
              return <Image style={{ tintColor: 'gray' }} source={require('../../assets/images/ic_payment.png')} />
            }


          },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="payment" component={PaymentScreen} />
        <Tab.Screen name="history" component={HistoryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Bai1_lab7

const styles = StyleSheet.create({
  //custom ic bottom
  ic_bottom: {
    tintColor:'white',
    shadowOpacity:10,
    shadowRadius:10,
  },
})