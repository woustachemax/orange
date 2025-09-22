import { Tabs } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';
import '../global.css';

const tabLayout = () => {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: "#b65916",
      tabBarStyle: {
        backgroundColor: 'transparent',
        position: 'absolute',
        borderTopWidth: 0,
        marginBottom: 20,
        elevation: 0,
        shadowOpacity: 0,
        height: 60,
        marginHorizontal: 20,
      }
    }}>
      <Tabs.Screen 
        name='index' 
        options={{
          title: "Squeeze",
          headerShown: false,
          tabBarIcon: () => (
            <Text style={{ fontSize: 24 }}>🍊</Text>
          )
        }}
      />
      <Tabs.Screen 
        name='streak' 
        options={{
          title: "Grove",
          headerShown: false,
          tabBarIcon: () => (
            <Text style={{ fontSize: 24 }}>🌳</Text>
          )
        }} 
      />
      <Tabs.Screen 
        name='addhabbit' 
        options={{
          title: "plant",
          headerShown: false,
          tabBarIcon: () => (
            <Text style={{ fontSize: 24 }}> 🌱</Text>
          )
        }} 
      />
    </Tabs>
  )
}

export default tabLayout