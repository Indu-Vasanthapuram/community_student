import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Banner({ onPress }: any) {
  return (
    <LinearGradient colors={['#6C63FF', '#4A47A3']} style={styles.banner}>
      <Text style={styles.title}>
        Be part of a community that helps you grow!
      </Text>

      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Text style={{ color: '#6C63FF' }}>Create Post</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  banner: {
    padding: 20,
    borderRadius: 20,
    marginVertical: 15,
  },
  title: { color: 'white', marginBottom: 10 },
  btn: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
});