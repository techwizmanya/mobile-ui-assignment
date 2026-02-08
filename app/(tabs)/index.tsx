import {
  Alert,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Index() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Instagram Clone</Text>
      </View>

      {/* Story Section */}
      <View style={styles.storySection}>
        <View style={styles.storyCircle} />
        <View style={styles.storyCircle} />
        <View style={styles.storyCircle} />
        <View style={styles.storyCircle} />
      </View>

      {/* Post 1 */}
      <View style={styles.postCard}>
        <Image
          source={{ uri: "https://placekitten.com/400/300" }}
          style={styles.postImage}
        />
        <Text style={styles.postText}>
          This is a sample Instagram-style post.
        </Text>
      </View>

      {/* Post 2 */}
      <View style={styles.postCard}>
        <Image
          source={{ uri: "https://placekitten.com/401/300" }}
          style={styles.postImage}
        />
        <Text style={styles.postText}>
          Another post just like the snapshot.
        </Text>
      </View>

      {/* Alert Button */}
      <View style={styles.buttonContainer}>
        <Button
          title="Alert"
          onPress={() => Alert.alert("Alert Button pressed")}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f8f8",
  },
  header: {
    padding: 15,
    backgroundColor: "#fafafa",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  headerText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  storySection: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
  },
  storyCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#ddd",
  },
  postCard: {
    marginBottom: 20,
  },
  postImage: {
    width: "100%",
    height: 250,
  },
  postText: {
    padding: 10,
    fontSize: 16,
  },
  buttonContainer: {
    margin: 20,
  },
});
