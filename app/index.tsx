import { View } from "react-native";
import { FlatList, ActivityIndicator } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "expo-router";
import PostCard from "./postcard";
import { useFonts, Poppins_600SemiBold } from "@expo-google-fonts/poppins";
export default function Index() {
  const [posts, setPosts] = useState<{ id: number; title: string; body: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    axios.get("https://gorest.co.in/public/v2/posts")
      .then(response => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch(error => console.error(error));
  }, []);

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;

  return (
    <View
      style={{
        backgroundColor:"#EEEEEE",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
  
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <PostCard post={item} onPress={() => router.push(`/post/${item.id}`)} />
        )}
      />
    </View>
  );
}
