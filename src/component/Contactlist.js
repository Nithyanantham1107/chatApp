import { View, Text ,StyleSheet,Image} from 'react-native'
import React from 'react'
import dayjs from 'dayjs';
import relativeTime from "dayjs/plugin/relativeTime";
import { useNavigation, useRoute } from '@react-navigation/native';
dayjs.extend(relativeTime)
const Contactlist = ({item}) => {
  return (
    <View style={styles.container}>
         <Image source={{uri:item.user.image}}
     style={styles.img} />
     <View style={{justifyContent:'space-between',flex:1}}>
   <View style={{
    flexDirection:'row',justifyContent:'space-between'}}>
      
    <Text numberOfLines={1} style={{fontSize:20,fontWeight:"500",marginLeft:4}}>{item.user.name}</Text>

  
     </View>
     <View>
      
   </View>
   </View>
    
  
  
   
    </View>
  );
}

export default Contactlist;
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