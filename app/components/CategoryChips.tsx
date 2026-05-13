import React from 'react';
import { ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';

const categories = ['All', 'Doubt', 'Java', 'Python', 'DSA', 'Web Dev'];

export default function CategoryChips({ selected, setSelected }: any) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {categories.map((cat) => (
        <TouchableOpacity
          key={cat}
          onPress={() => setSelected(cat)}
          style={[styles.chip, selected === cat && styles.active]}
        >
          <Text style={selected === cat && { color: 'white' }}>{cat}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  chip: {
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 20,
    marginRight: 10,
  },
  active: { backgroundColor: '#6C63FF' },
});