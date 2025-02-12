import { View, Text, Image, FlatList, ActivityIndicator } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocalSearchParams } from "expo-router";
import CommentCard from "../components/CommentCard";
import { Avatar } from "react-native-elements";
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
export default function PostDetails() {
  const { id } = useLocalSearchParams();
  const [post, setPost] = useState<{ title: string; body: string } | null>(null);
  const [comments, setComments] = useState<{ id: number; body: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const postRes = await axios.get(`https://gorest.co.in/public/v2/posts/${id}`);
        const commentsRes = await axios.get(`https://gorest.co.in/public/v2/comments`);
        setPost(postRes.data);
        setComments(commentsRes.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [id]);

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;

  return (
    <View  style={{backgroundColor:"#EEEEEE"}}>
        <View style={{borderBottomWidth:1 ,borderColor:"#AAAAAA", backgroundColor:"#F7f7f7"}}>
        <View style={{padding:10}}>
        <View style={{flexDirection:"row", marginBottom:20}}>
    <Avatar
      rounded
      size="medium"
      source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }}
      />
      <Text style={{alignContent:"center", justifyContent:"center" ,fontFamily: "Poppins_600SemiBold", marginLeft:10, marginTop:15}}>{post.user_id}</Text> 
    </View>
    
      <Text style={{fontFamily:"Poppins_600SemiBold",marginBottom:8}}>{post.title}</Text>
      <Text>{post.body}</Text>
      {/* Likes, comments and share*/}
     


        </View>
        </View>

        
      <FlatList
        data={comments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CommentCard comment={item} />}
      />
    </View>

  );
}
