import { View, Text, Image, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-elements";
import { FontAwesome } from '@expo/vector-icons';

export default function PostCard({ post, onPress }) {
  return (
    <View style={{borderWidth:1, borderRadius: 10,backgroundColor:"#F7F7F7", marginBottom:10, paddingLeft:20, paddingRight:20, paddingTop:10, paddingBottom:10, margin:10}}>
    <TouchableOpacity onPress={onPress} style={{   shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3 }}>
      <View style={{ flexDirection: "row", alignItems: "center" , marginBottom:10}}>
      <Avatar
      rounded
      size="medium"
      source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }}
      />
        <Text style={{ fontWeight: "800", fontFamily: "Poppins_700SemiBold",marginLeft:15 }}>{post.user_id}</Text>
      </View>
      
        <Text style={{ fontWeight: "700",fontFamily: "Poppins_600SemiBold",marginBottom:8 }}>{post.title}</Text>
        <Text style={{ fontFamily: "Poppins_400Regular" }}>{post.body.substring(0, 100)}...</Text>
      </TouchableOpacity>
      {/* Likes, comments and share */}
      <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 10 , padding: 10, }}>
  <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
    <FontAwesome name="thumbs-o-up" size={24} color="#7338A0" />
    <Text style={{ marginLeft: 5 ,fontFamily: "Poppins_600SemiBold"}}>Like</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={onPress} style={{ flexDirection: "row", alignItems: "center" }}>
    <FontAwesome name="comment-o" size={24} color="#7338A0" />
    <Text style={{ marginLeft: 5 ,fontFamily: "Poppins_600SemiBold"}} >Comment</Text>
  </TouchableOpacity>
  <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
    <FontAwesome name="share" size={24} color="#7338A0" />
    <Text style={{ marginLeft: 5 ,fontFamily: "Poppins_600SemiBold"}}>Share</Text>
  </TouchableOpacity>
</View>
    </View>
  );
}


