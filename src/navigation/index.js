import { View, Text } from 'react-native'
import React from 'react'


import { NavigationContainer } from '@react-navigation/native';
import Chatscreen from '../screens/Chatscreen';
import Chatlistscreen from '../screens/Chatlistscreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Maintab from './Maintab';
import Contactscreen from '../screens/Contactscreen';

const Navigation = () => {
    const Stack=createNativeStackNavigator();
  return (
    <NavigationContainer>

<Stack.Navigator screenOptions={{headerTitleAlign:"center"
    }} >

    <Stack.Screen name="home" component={Maintab} options={{headerShown:false}}/>
    <Stack.Screen name="chats" component={Chatlistscreen}/>
    <Stack.Screen name="chat" component={Chatscreen}/>
    <Stack.Screen name="contact" component={Contactscreen}/>
</Stack.Navigator>
    </NavigationContainer>
  );
}

export default  Navigation;
