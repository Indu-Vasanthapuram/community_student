import React, { useState } from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Header from '../components/Header';
import Banner from '../components/Banner';
import CategoryChips from '../components/CategoryChips';
import PostCard from '../components/PostCard';
import { posts } from '../data/mockData';

export default function CommunityScreen({ navigation }: any) {
  const [selected, setSelected] = useState('All');

  return (
    <View style={styles.container}>
      <Header />

      <Banner onPress={() => navigation.navigate('CreatePost')} />

      <CategoryChips selected={selected} setSelected={setSelected} />

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PostCard post={item} navigation={navigation} />
        )}
      />

      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('CreatePost')}
      >
        <Text style={{ color: 'white', fontSize: 22 }}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: '#F5F6FA' },

  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#6C63FF',
    padding: 16,
    borderRadius: 50,
  },
});