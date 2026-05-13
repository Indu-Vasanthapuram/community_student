import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Header() {
  return (
    <View style={styles.container}>
      <Ionicons name="menu" size={24} />

      <View>
        <Text style={styles.title}>Community</Text>
        <Text style={styles.subtitle}>Learn together, grow together</Text>
      </View>

      <Ionicons name="notifications" size={22} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: { fontSize: 20, fontWeight: 'bold' },
  subtitle: { fontSize: 12, color: 'gray' },
});