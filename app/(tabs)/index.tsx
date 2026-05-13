import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

const categories = ['All', 'Doubt', 'Java', 'Python', 'DSA', 'Web Dev'];

const trendingData = [
  {
    id: '1',
    user: 'Riya Sharma',
    tag: 'Doubt',
    title: 'Difference between ArrayList and LinkedList in Java?',
    desc: 'I’m confused about when to use ArrayList vs LinkedList...',
    likes: 42,
    comments: 18,
  },
  {
    id: '2',
    user: 'Aman Verma',
    tag: 'Java',
    title: 'Why String is immutable in Java?',
    desc: 'I know String is immutable but what is the reason...',
    likes: 37,
    comments: 16,
  },
];

export default function Community() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('Latest');
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

      {/* HEADER */}
      <View style={styles.headerRow}>
        <View>
          <Text style={styles.header}>Community</Text>
          <Text style={styles.subHeader}>Learn together, grow together 👥</Text>
        </View>

        <View style={styles.headerIcons}>
          <View>
            <Ionicons name="notifications-outline" size={22} />
            <View style={styles.badge} />
          </View>

          <Image
            source={require('../../assets/images/people.png')}
            style={styles.avatar}
          />
        </View>
      </View>

      {/* BANNER */}
      <LinearGradient
        colors={['#1E1F8F', '#5F5CFF']} // matched to your image tone
        style={styles.banner}
      >
        <View style={styles.bannerContent}>
          <View style={{ flex: 1 }}>
            <Text style={styles.bannerTitle}>
              Be part of a community that helps you grow!
            </Text>

            <Text style={styles.bannerSub}>
              Ask doubts, share knowledge and help others.
            </Text>

            <TouchableOpacity onPress={() => router.push('/create-post')}>
              <View style={styles.createBtn}>
                <Ionicons name="create-outline" size={16} color="#5F5CFF" />
                <Text style={styles.createText}>Create Post</Text>
              </View>
            </TouchableOpacity>
          </View>

          <Image
            source={require('../../assets/images/people.png')}
            style={styles.bannerImage}
          />
        </View>
      </LinearGradient>

      {/* EXPLORE DISCUSSIONS */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Explore Discussions</Text>
        <Text style={styles.viewAll}>View All</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((item) => (
          <TouchableOpacity
            key={item}
            onPress={() => setSelectedCategory(item)}
            style={[
              styles.chip,
              selectedCategory === item && styles.activeChip,
            ]}
          >
            <Text
              style={[
                styles.chipText,
                selectedCategory === item && { color: 'white' },
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* TRENDING */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>🔥 Trending Discussions</Text>
        <Text style={styles.viewAll}>View All</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {trendingData.map((item) => (
          <View key={item.id} style={styles.trendingCard}>
            
            <View style={styles.trendingTop}>
              <Image
                source={require('../../assets/images/people.png')}
                style={styles.smallAvatar}
              />

              <View style={styles.tag}>
                <Text style={styles.tagText}>{item.tag}</Text>
              </View>
            </View>

            <Text style={styles.trendingTitle}>{item.title}</Text>
            <Text style={styles.trendingDesc}>{item.desc}</Text>

            <View style={styles.row}>
              <Ionicons name="thumbs-up-outline" size={16} />
              <Text>{item.likes}</Text>

              <Ionicons name="chatbubble-outline" size={16} />
              <Text>{item.comments}</Text>
            </View>

          </View>
        ))}
      </ScrollView>

      {/* TABS */}
      <View style={styles.tabs}>
        <Text
          style={[
            styles.tab,
            activeTab === 'Latest' && styles.activeTab,
          ]}
          onPress={() => setActiveTab('Latest')}
        >
          Latest
        </Text>

        <Text
          style={[
            styles.tab,
            activeTab === 'Following' && styles.activeTab,
          ]}
          onPress={() => setActiveTab('Following')}
        >
          Following
        </Text>
      </View>

      <Text style={styles.empty}>nothing to be displayed</Text>

      {/* FAB */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => router.push('/create-post')}
      >
        <Ionicons name="add" size={22} color="white" />
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#F6F7FB',
  },

  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  header: { fontSize: 22, fontWeight: 'bold' },
  subHeader: { fontSize: 12, color: '#666' },

  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  badge: {
    position: 'absolute',
    right: -4,
    top: -4,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'red',
  },

  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },

  banner: {
    marginTop: 15,
    borderRadius: 20,
    padding: 20,
  },

  bannerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  bannerTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  bannerSub: {
    color: '#E0E0FF',
    marginVertical: 8,
    fontSize: 12,
  },

  createBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'white',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },

  createText: {
    color: '#5F5CFF',
    fontWeight: '600',
  },

  bannerImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },

  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  viewAll: {
    color: '#6C63FF',
    fontSize: 13,
  },

  chip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 12,
    backgroundColor: '#fff',
    marginRight: 10,
    marginTop: 10,
  },

  activeChip: {
    backgroundColor: '#5F5CFF',
  },

  chipText: {
    fontSize: 12,
    color: '#333',
  },

  trendingCard: {
    width: 220,
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 14,
    marginRight: 12,
    marginTop: 10,
  },

  trendingTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  smallAvatar: {
    width: 26,
    height: 26,
    borderRadius: 13,
  },

  tag: {
    backgroundColor: '#EDEBFF',
    paddingHorizontal: 8,
    borderRadius: 10,
  },

  tagText: {
    color: '#5F5CFF',
    fontSize: 10,
  },

  trendingTitle: {
    marginTop: 8,
    fontWeight: 'bold',
  },

  trendingDesc: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 10,
  },

  tabs: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 20,
  },

  tab: {
    color: '#888',
    fontSize: 14,
  },

  activeTab: {
    color: '#5F5CFF',
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderBottomColor: '#5F5CFF',
  },

  empty: {
    marginTop: 10,
    color: '#888',
  },

  fab: {
    position: 'absolute',
    right: 20,
    bottom: 30,
    backgroundColor: '#5F5CFF',
    padding: 18,
    borderRadius: 50,
  },
});