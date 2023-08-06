import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import dayjs from 'dayjs';
import relativeTime from "dayjs/plugin/relativeTime";
import { useNavigation, useRoute } from '@react-navigation/native';
dayjs.extend(relativeTime)

const Chatlist = ({item}) => {
  const navigation=useNavigation();

  return (
    <TouchableOpacity   onPress={()=>{
      navigation.navigate("chat",{name:item.user.name,});
    }}>
    <View style={styles.container}>
         <Image source={{uri:item.user.image}}
     style={styles.img} />
     <View style={{justifyContent:'space-between',flex:1}}>
   <View style={{
    flexDirection:'row',justifyContent:'space-between'}}>
      
    <Text numberOfLines={1} style={{fontSize:20,fontWeight:"500",marginLeft:4}}>{item.user.name}</Text>
     <Text style={styles.txt}>{dayjs(item.lastMessage.createdAt).fromNow(true)}</Text>
  
     </View>
     <View>
      <Text  style={styles.txt} numberOfLines={2}>{item.lastMessage.text} </Text>
   </View>
   </View>
    
  
  
   
    </View></TouchableOpacity>
  );
}

export default Chatlist;
 

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
   paddingRight:5,
   borderBottomColor:"light gray",
   borderBottomWidth:0.5
   
    
  },
  img:{
    height:60,
    width:60,
    borderRadius:60
  },
  txt:{
    color:"gray",


  }
});