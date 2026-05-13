import React, { useState } from 'react';
import {
  View, Text, TextInput, StyleSheet, TouchableOpacity, Switch
} from 'react-native';

export default function CreatePostScreen() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [anon, setAnon] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create Post</Text>

      <TextInput
        placeholder="Enter a clear and short title"
        style={styles.input}
        maxLength={100}
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        placeholder="Share your thoughts..."
        style={[styles.input, { height: 120 }]}
        multiline
        value={desc}
        onChangeText={setDesc}
      />

      <View style={styles.row}>
        <Text>Post Anonymously</Text>
        <Switch value={anon} onValueChange={setAnon} />
      </View>

      <TouchableOpacity
        disabled={!title || !desc}
        style={[styles.btn, (!title || !desc) && { opacity: 0.5 }]}
      >
        <Text style={{ color: '#fff' }}>Post</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 20, fontWeight: 'bold' },

  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    borderRadius: 12,
    marginVertical: 10,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },

  btn: {
    backgroundColor: '#6C63FF',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
});