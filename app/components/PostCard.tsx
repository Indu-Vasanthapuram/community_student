import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function PostCard({ post, navigation }: any) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('PostDetail', { post })}>
      <View style={styles.card}>
        <Text style={styles.user}>{post.user} • {post.time}</Text>

        <Text style={styles.title}>{post.title}</Text>
        <Text style={styles.desc}>{post.description}</Text>

        <View style={styles.row}>
          <Text>👍 {post.likes}</Text>
          <Text>💬 {post.comments}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 20,
    marginVertical: 10,
    elevation: 3,
  },
  user: { color: 'gray' },
  title: { fontWeight: 'bold', marginVertical: 5 },
  desc: { color: '#555' },
  row: { flexDirection: 'row', gap: 20, marginTop: 10 },
});