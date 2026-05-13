import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function PostDetail() {
  const { post } = useLocalSearchParams();
  const data = JSON.parse(post as string);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.title}</Text>
      <Text>{data.desc}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 18, fontWeight: 'bold' },
});