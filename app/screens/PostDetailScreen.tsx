import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function PostDetailScreen({ route, navigation }: any) {
  const { post } = route.params;

  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState('');

  const commentsData = [
    {
      id: '1',
      user: 'Rahul',
      text: 'Great explanation! Helped a lot 👍',
      replies: [{ id: 'r1', user: 'Riya', text: 'Glad it helped!' }],
    },
    {
      id: '2',
      user: 'Sneha',
      text: 'Can you explain with an example?',
      replies: [],
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={22} />
        </TouchableOpacity>

        <View style={styles.headerIcons}>
          <Ionicons name="bookmark-outline" size={22} />
          <Ionicons name="ellipsis-vertical" size={22} />
        </View>
      </View>

      {/* POST CONTENT */}
      <View style={styles.postCard}>
        <Text style={styles.user}>{post.user} • {post.time}</Text>

        <View style={styles.tag}>
          <Text style={styles.tagText}>{post.tag}</Text>
        </View>

        <Text style={styles.title}>{post.title}</Text>
        <Text style={styles.desc}>{post.description}</Text>

        <View style={styles.actions}>
          <TouchableOpacity onPress={() => setLiked(!liked)}>
            <Text>👍 {liked ? post.likes + 1 : post.likes}</Text>
          </TouchableOpacity>
          <Text>💬 {post.comments}</Text>
          <Text>↗ Share</Text>
        </View>
      </View>

      {/* BEST ANSWER */}
      <View style={styles.bestAnswer}>
        <Text style={styles.bestLabel}>⭐ Best Answer</Text>
        <Text style={styles.bestText}>
          Use ArrayList when you need fast access, LinkedList when you need frequent insertions.
        </Text>
      </View>

      {/* COMMENTS */}
      <Text style={styles.commentHeader}>Comments</Text>

      <FlatList
        data={commentsData}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 80 }}
        renderItem={({ item }) => (
          <View style={styles.commentBox}>
            <Text style={styles.commentUser}>{item.user}</Text>
            <Text>{item.text}</Text>

            <View style={styles.replyActions}>
              <Text>👍</Text>
              <Text>Reply</Text>
            </View>

            {/* Replies */}
            {item.replies.map((reply: any) => (
              <View key={reply.id} style={styles.reply}>
                <Text style={styles.commentUser}>{reply.user}</Text>
                <Text>{reply.text}</Text>
              </View>
            ))}
          </View>
        )}
      />

      {/* ADD COMMENT */}
      <View style={styles.inputBox}>
        <TextInput
          placeholder="Write a comment..."
          value={comment}
          onChangeText={setComment}
          style={styles.input}
        />
        <TouchableOpacity>
          <Ionicons name="send" size={20} color="#6C63FF" />
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FA',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },

  headerIcons: {
    flexDirection: 'row',
    gap: 15,
  },

  postCard: {
    backgroundColor: '#fff',
    margin: 15,
    padding: 15,
    borderRadius: 16,
    elevation: 3,
  },

  user: {
    color: 'gray',
    marginBottom: 5,
  },

  tag: {
    alignSelf: 'flex-start',
    backgroundColor: '#6C63FF',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    marginBottom: 8,
  },

  tagText: {
    color: 'white',
    fontSize: 12,
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },

  desc: {
    color: '#555',
  },

  actions: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 10,
  },

  bestAnswer: {
    backgroundColor: '#EDEBFF',
    marginHorizontal: 15,
    padding: 15,
    borderRadius: 12,
  },

  bestLabel: {
    fontWeight: 'bold',
    color: '#6C63FF',
    marginBottom: 5,
  },

  bestText: {
    color: '#333',
  },

  commentHeader: {
    fontWeight: 'bold',
    fontSize: 16,
    margin: 15,
  },

  commentBox: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginBottom: 10,
    padding: 12,
    borderRadius: 12,
  },

  commentUser: {
    fontWeight: 'bold',
  },

  replyActions: {
    flexDirection: 'row',
    gap: 15,
    marginTop: 5,
  },

  reply: {
    marginTop: 8,
    marginLeft: 15,
    backgroundColor: '#f2f2f2',
    padding: 8,
    borderRadius: 10,
  },

  inputBox: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    width: '100%',
    borderTopWidth: 1,
    borderColor: '#eee',
  },

  input: {
    flex: 1,
    padding: 10,
  },
});