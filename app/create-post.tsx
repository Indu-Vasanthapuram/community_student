import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Switch,
  Image,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

const categories = [
  {
    name: 'Doubt',
    icon: require('../assets/images/people.png'),
  },
  {
    name: 'Java',
    icon: { uri: 'https://mercy-20.github.io/Portfolio/img/JavaEE.png' },
  },
  {
    name: 'Python',
    icon: {
      uri: 'https://img.freepik.com/premium-vector/python-icon_1181510-14.jpg?semt=ais_hybrid&w=740&q=80',
    },
  },
  {
    name: 'DSA',
    icon: {
      uri: 'https://www.shutterstock.com/image-illustration/business-chart-graph-arrow-transparent-600nw-2652544831.jpg',
    },
  },
  {
    name: 'Web Dev',
    icon: require('../assets/images/people.png'),
  },
];

export default function CreatePost() {
  const router = useRouter();

  const [selected, setSelected] = useState('Doubt');
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [anonymous, setAnonymous] = useState(false);

  const isDisabled = title.trim() === '' || desc.trim() === '';

  return (
    <ScrollView style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="close" size={24} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Create Post</Text>

        <TouchableOpacity disabled={isDisabled}>
          <Text
            style={[
              styles.postBtn,
              { opacity: isDisabled ? 0.4 : 1 },
            ]}
          >
            Post
          </Text>
        </TouchableOpacity>
      </View>

      {/* CATEGORY */}
      <Text style={styles.label}>Select Category</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((item) => (
          <TouchableOpacity
            key={item.name}
            onPress={() => setSelected(item.name)}
            style={[
              styles.categoryBox,
              selected === item.name && styles.activeCategory,
            ]}
          >
            <Image source={item.icon} style={styles.catIcon} />
            <Text style={styles.catText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* TITLE */}
      <Text style={styles.label}>Title</Text>

      <View style={styles.inputBox}>
        <TextInput
          placeholder="Enter a clear and short title"
          value={title}
          onChangeText={setTitle}
          maxLength={100}
        />
        <Text style={styles.counter}>{title.length}/100</Text>
      </View>

      {/* DESCRIPTION */}
      <Text style={styles.label}>Description</Text>

      <View style={styles.descBox}>
        <TextInput
          placeholder="Share your thoughts, ask a question or start a discussion..."
          multiline
          value={desc}
          onChangeText={setDesc}
          maxLength={2000}
          style={{ height: 120 }}
        />
        <Text style={styles.counter}>{desc.length}/2000</Text>
      </View>

      {/* ATTACHMENTS */}
      <View style={styles.attachRow}>
        <TouchableOpacity style={styles.attachBtn}>
          <Ionicons name="image-outline" size={18} color="#5F5CFF" />
          <Text style={styles.attachText}>Image</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.attachBtn}>
          <Ionicons name="code-slash-outline" size={18} color="#5F5CFF" />
          <Text style={styles.attachText}>Code</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.attachBtn}>
          <Ionicons name="link-outline" size={18} color="#5F5CFF" />
          <Text style={styles.attachText}>Link</Text>
        </TouchableOpacity>
      </View>

      {/* ANONYMOUS */}
      <View style={styles.anonymousRow}>
        <View>
          <Text style={styles.anonTitle}>Post Anonymously</Text>
          <Text style={styles.anonSub}>
            Your name won't be visible on this post
          </Text>
        </View>

        <Switch
          value={anonymous}
          onValueChange={setAnonymous}
          trackColor={{ false: '#ccc', true: '#5F5CFF' }}
        />
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F6F7FB',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },

  postBtn: {
    color: '#5F5CFF',
    fontWeight: '600',
  },

  label: {
    marginTop: 20,
    marginBottom: 8,
    fontWeight: '600',
  },

  categoryBox: {
    width: 80,
    height: 80,
    borderRadius: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  activeCategory: {
    borderWidth: 2,
    borderColor: '#5F5CFF',
  },

  catIcon: {
    width: 30,
    height: 30,
    marginBottom: 6,
  },

  catText: {
    fontSize: 12,
  },

  inputBox: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
  },

  descBox: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
  },

  counter: {
    textAlign: 'right',
    fontSize: 10,
    color: '#888',
  },

  attachRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },

  attachBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 12,
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 4,
    backgroundColor: '#fff',
  },

  attachText: {
    color: '#5F5CFF',
    fontWeight: '500',
  },

  anonymousRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    alignItems: 'center',
  },

  anonTitle: {
    fontWeight: '600',
  },

  anonSub: {
    fontSize: 12,
    color: '#888',
  },
});