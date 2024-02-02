import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

import Register from './Register';
import Login from './Login';

const AuthenStackNavigation = () => {
  return (
    
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Login'>
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  )
}

export default AuthenStackNavigation