import { View, Text } from "react-native";
import { Avatar } from "react-native-elements";

export default function CommentCard({ comment }) {
  return (
    <View style={{ padding: 10  }}>
      <View style={{ backgroundColor:"#F7F7F7" ,padding:5,paddingBottom:10}}> 
        <View style={{flexDirection:"row" ,height:50,alignItems:"center", marginBottom:5}}>
      <Avatar
      rounded
      size="small"
      source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }}
      />
      <Text style={{ fontWeight: "600", marginLeft:10 }}>{comment.name}</Text>
      </View>
      
      <Text>{comment.body}</Text>
      </View>
     
    </View>
  );
}
