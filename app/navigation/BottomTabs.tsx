import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CommunityStack from './CommunityStack';
import { Ionicons } from '@expo/vector-icons';
import { View, Text } from 'react-native';

const Tab = createBottomTabNavigator();

const Dummy = ({ name }: any) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>{name}</Text>
  </View>
);

export default function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" children={() => <Dummy name="Home" />}
        options={{ tabBarIcon: ({ color }) => <Ionicons name="home" size={20} color={color}/> }}
      />
      <Tab.Screen name="Learning" children={() => <Dummy name="Learning" />}
        options={{ tabBarIcon: ({ color }) => <Ionicons name="book" size={20} color={color}/> }}
      />
      <Tab.Screen name="Progress" children={() => <Dummy name="Progress" />}
        options={{ tabBarIcon: ({ color }) => <Ionicons name="stats-chart" size={20} color={color}/> }}
      />
      <Tab.Screen name="Community" component={CommunityStack}
        options={{ tabBarIcon: ({ color }) => <Ionicons name="people" size={20} color={color}/> }}
      />
      <Tab.Screen name="Achievements" children={() => <Dummy name="Achievements" />}
        options={{ tabBarIcon: ({ color }) => <Ionicons name="trophy" size={20} color={color}/> }}
      />
    </Tab.Navigator>
  );
}