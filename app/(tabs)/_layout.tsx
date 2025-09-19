import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from 'expo-router';
import React from 'react';

const tabLayout = () => {
  return (
    <Tabs screenOptions={{tabBarActiveTintColor: "#b65916"}}>
        <Tabs.Screen name='index' options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({color})=> (
                <FontAwesome name="home" size={24} color={color} />
            )
        }}/>
        <Tabs.Screen name='login' options={{
            title: "Login",
            headerShown: false, 
            tabBarIcon : ({color})=>(
                <MaterialCommunityIcons name="login" size={24} color={color} />
            )
        }} />
    </Tabs>
  )
}

export default tabLayout