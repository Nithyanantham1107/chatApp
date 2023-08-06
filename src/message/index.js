import { View, Text, ImageBackground ,StyleSheet} from 'react-native'
import React from 'react'
import dayjs from 'dayjs';
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime)


const Message= ({chat}) => {

  const userchat =()=>{
    return chat.user.id=='u1';
  }
  return (

   <View style={[styles.container,{
    backgroundColor:userchat()? "#A3FA88":'white',
    alignSelf:userchat()?'flex-end':"flex-start",
   }]}>
    <Text>{chat.text}</Text>
    <Text style={styles.time}>{dayjs(chat.createdAt).fromNow(true)}</Text>
</View>
  );
}

export default Message;
const styles = StyleSheet.create({
  container: {

  alignSelf:'flex-start',
  padding:5,
  marginHorizontal:3,
  borderRadius:15,
  backgroundColor:"white",
  maxWidth:'80%'

  ,marginVertical:4,
  shadowColor:"#000",
  shadowOffset:{
    height:1,
    width:0
  },
  shadowOpacity:0.18,
  shadowRadius:1.0,
 elavation:1,
 
   
    
  },
  time:{
    alignSelf:'flex-end',
    color:"gray"
  }
});
