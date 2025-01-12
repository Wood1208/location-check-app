import React from "react";
import { Tabs } from "expo-router";
import { StatusBar } from 'expo-status-bar';

import Ionicons from '@expo/vector-icons/Ionicons';

const TabLayout = () => {
  return (
    <>
      <StatusBar style="auto" translucent={true} backgroundColor="transparent" />
      <Tabs
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            backgroundColor: "white",
          },
          // tabBarShowLabel: false,
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "bold",
          },
          tabBarIcon: ({ focused, color, size}) => {
            let iconName: keyof typeof Ionicons.glyphMap = "home";

            if(route.name === 'dashboard') {
              iconName = focused ? 'person' : 'person-outline';
            } else if(route.name === 'settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tabs.Screen 
          name="dashboard"
          options={{ 
            title: "主页",
            headerShown: false,
          }} 
        />
        <Tabs.Screen
          name="settings" 
          options={{ 
            title: "设置",
            headerShown: false,
          }} 
        />
      </Tabs>
    </>
  );
};

export default TabLayout;